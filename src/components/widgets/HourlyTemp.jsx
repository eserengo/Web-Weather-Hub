import Carousel from 'react-bootstrap/Carousel'
import WeatherCode from '../../services/WeatherCode'
import PropTypes from 'prop-types'

const HourlyTemp = ({ weatherData }) => {
  const createArrayOfObjects = (...arrays) => {
    const length = arrays[0].length;
    const result = [];

    for (let i = 0; i < length; i++) {
      const obj = {};
      for (let j = 0; j < arrays.length; j++) {
        switch (j) {
          case 0:
            obj['is_day'] = arrays[j][i];
            break;
          case 1:
            obj['temperature_2m'] = arrays[j][i];
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

  const filteredHourlyData = () => {
    return weatherData?.hourly &&
      createArrayOfObjects(
        weatherData.hourly.is_day,
        weatherData.hourly.temperature_2m,
        weatherData.hourly.time,
        weatherData.hourly.weather_code,
      )
  }

  return (
    <Carousel slide={false} indicators={false} interval={null}>
      {filteredHourlyData() && filteredHourlyData()
        .map((item, index) => (
          <Carousel.Item key={`temp_item_${index}`} className='temp'>
            <Carousel.Caption>
              <div className='d-flex flex-row flex-wrap align-items-center justify-content-between gap-1 w-100 mb-2'>
                <span className='para'>
                  Hourly temperature
                </span>
                <span className='para'>
                  {new Date(item.time).toLocaleTimeString('en', {
                    timeStyle: 'short',
                    timeZone: `${weatherData?.timezone}`,
                  })}
                </span>
              </div>
              <span>
                <WeatherCode input={item.weather_code} output={'icon'} isDay={item.is_day} />
              </span>
              <span className='para'>
                Temperature: {item.temperature_2m} {weatherData?.hourly_units?.temperature_2m}
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

HourlyTemp.propTypes = {
  weatherData: PropTypes.object,
}

export default HourlyTemp;
