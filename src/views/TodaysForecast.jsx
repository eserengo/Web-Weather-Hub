/* eslint-disable react-hooks/exhaustive-deps */
import ReactDOMServer from 'react-dom/server'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserLocation } from '../App/userLocationSlice'
import { setIsDay } from '../App/isDaySlice'
import { toggleTempUnit } from '../App/tempUnitSlice'
import WeatherCode from '../services/WeatherCode'
import Temp from '../components/widgets/Temp'
import Hum from '../components/widgets/Hum'
import axios from 'axios'
import SwapSvg from '../assets/icons/swap.svg?react'
import ReloadSvg from '../assets/icons/reload.svg?react'

const TodaysForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const userLocation = useSelector(state => state.userLocation.data);
  const isDay = useSelector(state => state.isDay);
  const tempUnit = useSelector(state => state.tempUnit);
  const dispatch = useDispatch();

  const fetchWeatherData = async () => {
    const END_POINT = import.meta.env.VITE_OPENMETEO_ENDPOINT;
    const UNIT = import.meta.env.VITE_OPENMETEO_UNIT;
    const QUERY_PARAMS = `?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&current=temperature_2m,is_day,weather_code&timezone=auto&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,is_day&forecast_hours=24`;
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

  const handleSwapClick = () => {
    dispatch(toggleTempUnit());
  }

  const handleReloadClick = () => {
    fetchWeatherData();
  }

  const setClassName = () => {
    return weatherData?.current && ReactDOMServer.renderToString(<WeatherCode input={weatherData?.current?.weather_code} output={'class'} isDay={isDay.value} />);
  }

  return (
    <>
      <section className={`${setClassName()} text-offWhite col-12 rounded-4 d-flex flex-column align-items-center align-items-sm-start justify-content-center p-2`}>
        {weatherData?.current &&
          <>
            <div className='d-flex align-items-center gap-3'>
              <span>{userLocation.city}, {userLocation.country}</span>
              <i className='reload-icon drop d-inline' onClick={handleReloadClick}>
                <ReloadSvg />
              </i>
            </div>
            <div className='d-flex align-items-center gap-3 fs-1 fw-bold'>
              <span>{weatherData?.current?.temperature_2m} {weatherData?.current_units?.temperature_2m}</span>
              <i className='swap-icon drop d-inline' onClick={handleSwapClick}>
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
      <section className={`${setClassName()} wide col-12 rounded-4 d-flex flex-column flex-sm-row align-items-stretch align-items-sm-end justify-content-center  justify-content-sm-start gap-2 mt-2 mb-5 mb-sm-0 p-2`}>
        {weatherData?.current && 
          <>
            <Temp weatherData={weatherData} />
            <Hum weatherData={weatherData} />
          </>
        }
      </section>
    </>
  )
}

export default TodaysForecast;
