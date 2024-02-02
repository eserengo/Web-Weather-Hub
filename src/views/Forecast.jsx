/* eslint-disable react-hooks/exhaustive-deps */
import ReactDOMServer from 'react-dom/server'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserLocation } from '../App/userLocationSlice'
import { setIsDay } from '../App/isDaySlice'
import { toggleTempUnit } from '../App/tempUnitSlice'
import WeatherCode from '../services/WeatherCode'
import DailyStats from '../components/widgets/DailyStats'
import axios from 'axios'
import SwapSvg from '../assets/icons/swap.svg?react'
import ReloadSvg from '../assets/icons/reload.svg?react'

const Forecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const userLocation = useSelector(state => state.userLocation.data);
  const isDay = useSelector(state => state.isDay);
  const tempUnit = useSelector(state => state.tempUnit);
  const dispatch = useDispatch();

  const fetchWeatherData = async () => {
    const END_POINT = import.meta.env.VITE_OPENMETEO_ENDPOINT;
    const UNIT = import.meta.env.VITE_OPENMETEO_UNIT;
    const QUERY_PARAMS = `?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&current=is_day&timezone=auto&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=8`;
    let url;

    tempUnit.value === 'fahrenheit'
      ? url = END_POINT + QUERY_PARAMS + UNIT
      : url = END_POINT + QUERY_PARAMS;

    await axios
      .get(url)
      .then(response => {
        dispatch(setIsDay(response?.data?.current?.is_day))
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
    return weatherData?.daily && ReactDOMServer.renderToString(<WeatherCode input={weatherData?.daily?.weather_code[1]} output={'class'} isDay={isDay.value} />);
  }

  return (
    <>
      <section className={`${setClassName()} bg text-offWhite col-12 rounded-4 d-flex flex-column align-items-center align-items-sm-start justify-content-center gap-xs-2 pt-4 p-xs-2`}>
        {weatherData?.daily &&
          <>
            <div className='d-flex align-items-center gap-2'>
              <span className='para'>{userLocation.city}, {userLocation.country}</span>
              <i className='reload-icon drop d-inline mt-1' onClick={handleReloadClick}>
                <ReloadSvg />
              </i>
            </div>
            <div className='d-flex align-items-center gap-2 fw-bold'>
              <span className='para'>L : </span>
              <span className='title'>{weatherData?.daily?.temperature_2m_min[1]} {weatherData?.daily_units?.temperature_2m_min}</span>
              <span className='title'>/</span>
              <span className='para'>H : </span>
              <span className='title'>{weatherData?.daily?.temperature_2m_max[1]} {weatherData?.daily_units?.temperature_2m_max}</span>
              <i className='swap-icon drop d-inline' onClick={handleSwapClick}>
                <SwapSvg />
              </i>
            </div>
            <p className='para'><WeatherCode input={weatherData?.daily?.weather_code[1]} output={'desc'} isDay={isDay.value} /></p>
            <span className='para'>
              {new Date(weatherData?.daily?.time[1]).toLocaleString('en', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                timeZone: 'UTC',
              })}
            </span>
          </>
        }
        {weatherData?.Error &&
          <div className='text-danger d-flex align-items-center'>
            <p className='para'>{weatherData.Error.message}</p>
          </div>
        }
      </section>
      <section className='widgets col-12'>
        {weatherData?.current &&
          <>
          <DailyStats weatherData={weatherData} />
          </>
        }
      </section>
    </>
  )
}

export default Forecast;
