import Carousel from 'react-bootstrap/Carousel'
import DrizzleSvg from '../../assets/icons/drizzle.svg?react'
import PropTypes from 'prop-types'

const Hum = ({ weatherData }) => {
  const createArrayOfObjects = (...arrays) => {
    const length = arrays[0].length;
    const result = [];

    for (let i = 0; i < length; i++) {
      const obj = {};
      for (let j = 0; j < arrays.length; j++) {
        switch (j) {
          case 0:
            obj["precipitation_probability"] = arrays[j][i];
            break;
          case 1:
            obj["relative_humidity_2m"] = arrays[j][i];
            break;
          default:
            obj["time"] = arrays[j][i];
        }
      }
      result.push(obj);
    }
    return result;
  }

  const filteredHourlyData = weatherData?.hourly &&
    createArrayOfObjects(
      weatherData?.hourly?.precipitation_probability,
      weatherData?.hourly?.relative_humidity_2m,
      weatherData?.hourly?.time,
    )

  return (
    <Carousel slide={false} indicators={false} interval={null} variant='dark'>
      {filteredHourlyData && filteredHourlyData
        .map((item, index) => (
          <Carousel.Item key={`hum_item_${index}`}>
            <Carousel.Caption>
              <span className='fs-6'>
                {new Date(item.time).toLocaleTimeString("en", {
                  timeStyle: 'short',
                  timeZone: `${weatherData?.timezone}`,
                })}
              </span>
              <div className='d-inline-flex align-align-items-center gap-2'>
                <i className='weather-icon oversized'>
                  <DrizzleSvg />
                </i>
                <span className='fs-1'>
                  {item.precipitation_probability}{weatherData?.hourly_units?.precipitation_probability}
                </span>
              </div>
              <span className='fs-6'>
                Rel. humidity: {item.relative_humidity_2m}{weatherData?.hourly_units?.relative_humidity_2m}
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

Hum.propTypes = {
  weatherData: PropTypes.object,
}

export default Hum;