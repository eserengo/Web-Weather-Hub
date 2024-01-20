/* eslint-disable react-hooks/exhaustive-deps */
import ReactDOMServer from 'react-dom/server'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserLocation } from '../App/userLocationSlice'
import { setIsDay } from '../App/isDaySlice'
import { toggleTempUnit } from '../App/tempUnitSlice'
import WeatherCode from '../services/WeatherCode'
import axios from 'axios'
import SwapSvg from '../assets/icons/swap.svg?react'

const TodaysForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const userLocation = useSelector(state => state.userLocation.data);
  const isDay = useSelector(state => state.isDay);
  const tempUnit = useSelector(state => state.tempUnit);
  const dispatch = useDispatch();

  const fetchWeatherData = async () => {
    const hours = 24 - (new Date().getHours());
    const END_POINT = 'https://api.open-meteo.com/v1/forecast';
    const QUERY_PARAMS = `?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code,is_day&timezone=auto&forecast_hours=${hours}`;
    const UNIT = '&temperature_unit=fahrenheit';
    let url;

    tempUnit.value === 'fahrenheit'
      ? url = END_POINT + QUERY_PARAMS + UNIT
      : url = END_POINT + QUERY_PARAMS;
    
    await axios
      .get(url)
      .then(response => {
        dispatch(setIsDay(response?.data.current?.is_day))
        setWeatherData(response?.data)
      })
      .catch(error => setWeatherData({ Error: error }))
  }

  useEffect(() => {
    dispatch(fetchUserLocation());
  }, [])
  
  useEffect(() => {
    fetchWeatherData();
  }, [tempUnit.value, userLocation])

  const handleClick = () => {
    dispatch(toggleTempUnit());
  }

  const setClassName = () => {
    return weatherData?.current && ReactDOMServer.renderToString(<WeatherCode input={weatherData?.current?.weather_code} output={'class'} isDay={isDay.value} />);
  }

  const createArrayOfObjects = (...arrays) => {
    const length = arrays[0].length;
    const result = [];

    for (let i = 0; i < length; i++) {
      const obj = {};
      for (let j = 0; j < arrays.length; j++) {
        switch (j) {
          case 0:
            obj["is_day"] = arrays[j][i];
            break;
          case 1:
            obj["temperature_2m"] = arrays[j][i];
            break;
          case 2:
            obj["time"] = arrays[j][i];
            break;
          default:
            obj["weather_code"] = arrays[j][i];
        }
      }
      result.push(obj);
    }
    return result;
  }

  const filteredHourlyData = weatherData?.hourly && 
    createArrayOfObjects(
      weatherData?.hourly?.is_day,
      weatherData?.hourly?.temperature_2m,
      weatherData?.hourly?.time,
      weatherData?.hourly?.weather_code,
    )

  return (
    <>
      <section className={`${setClassName()} text-offWhite col-12 rounded-4 d-flex flex-column align-items-center align-items-sm-start justify-content-center p-2`}>
        {weatherData?.current &&
          <>
            <p>{userLocation.city}, {userLocation.country}</p>
            <div className='fs-1 fw-bold'>
              <span>{weatherData?.current?.temperature_2m} </span>
              <span>{weatherData?.current_units?.temperature_2m}</span>
              <i className='swap-icon' onClick={handleClick}>
                <SwapSvg />
              </i>
            </div>
            <p><WeatherCode input={weatherData?.current?.weather_code} output={'desc'} isDay={isDay.value} /></p>
          </>
        }
        {weatherData?.Error &&
          <>
            <p>{weatherData.Error.message}</p>
          </>
        }
      </section>
      <section className={`${setClassName()} wide text-offBlack col-12 d-flex flex-column align-items-stretch justify-content-center gap-1 mt-2 flex-sm-row align-items-sm-center`}>
        {filteredHourlyData &&
          filteredHourlyData.map((item, index) => (
              <div key={`hourly_card_${index}`} className='border rounded-1 d-flex flex-row align-items-center justify-content-between p-1 flex-sm-column'
              >
                <span>
                  {new Date(item.time).toLocaleTimeString("en", {
                    timeStyle: 'short',
                    timeZone: `${weatherData?.timezone}`,
                  })}
                </span>
                <WeatherCode input={item.weather_code} output={'icon'} isDay={item.is_day}/>
                <span>
                  {item.temperature_2m} {weatherData?.hourly_units?.temperature_2m}
                </span>
              </div>
          ))
        }
      </section>
    </>
  )
}

export default TodaysForecast;
