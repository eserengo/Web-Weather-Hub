// import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import WeatherCode from '../../services/WeatherCode'
import PropTypes from 'prop-types'

const DailyStats = ({ weatherData }) => {
  const createArrayOfObjects = (...arrays) => {
    const length = arrays[0].length;
    const result = [];

    for (let i = 0; i < length; i++) {
      const obj = {};
      for (let j = 0; j < arrays.length; j++) {
        switch (j) {
          case 0:
            obj['temperature_2m_min'] = arrays[j][i];
            break;
          case 1:
            obj['temperature_2m_max'] = arrays[j][i];
            break;
          case 2:
            obj['time'] = arrays[j][i];
            break;
          default:
            obj['weather_code'] = arrays[j][i];
        }
      }
      result.push(obj);
    }
    return result;
  }

  const filteredDailyData = () => {
    return weatherData?.daily &&
      createArrayOfObjects(
        weatherData.daily.temperature_2m_min.slice(2),
        weatherData.daily.temperature_2m_max.slice(2),
        weatherData.daily.time.slice(2),
        weatherData.daily.weather_code.slice(2),
      )
  }

  // useEffect(() => console.log(weatherData), [weatherData]);

  return (
    filteredDailyData() && filteredDailyData()
      .map((item, index) => (
        <Card.Body key={`daily_item_${index}`} className=' bg-black text-offWhite'>
          <div>
            <span className='para'>
              {new Date(item.time).toLocaleString('en', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                timeZone: 'UTC',
              })}
            </span>
            <span>
              <WeatherCode input={item.weather_code} output={'icon'} isDay={item.is_day} />
            </span>
            <span className='para'>
              L: {item.temperature_2m_min} {weatherData?.daily_units?.temperature_2m_min} / H: {item.temperature_2m_max} {weatherData?.daily_units?.temperature_2m_max}
            </span>
        </div>
      </Card.Body>
    ))
  )
}

DailyStats.propTypes = {
  weatherData: PropTypes.object,
}

export default DailyStats;
