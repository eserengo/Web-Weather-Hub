import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'

const HourlyHum = ({ weatherData }) => {
  const createArrayOfObjects = (...arrays) => {
    const length = arrays[0].length;
    const result = [];

    for (let i = 0; i < length; i++) {
      const obj = {};
      for (let j = 0; j < arrays.length; j++) {
        switch (j) {
          case 0:
            obj['precipitation_probability'] = arrays[j][i];
            break;
          case 1:
            obj['relative_humidity_2m'] = arrays[j][i];
            break;
          default:
            obj['time'] = arrays[j][i];
        }
      }
      result.push(obj);
    }
    return result;
  }

  const filteredHourlyData = () => {
    return weatherData?.hourly &&
      createArrayOfObjects(
        weatherData.hourly.precipitation_probability,
        weatherData.hourly.relative_humidity_2m,
        weatherData.hourly.time,
      )
  }

  return (
    <Carousel slide={false} indicators={false} interval={null}>
      {filteredHourlyData() && filteredHourlyData()
        .map((item, index) => (
          <Carousel.Item key={`hum_item_${index}`} className='hum'>
            <Carousel.Caption>

              <div className='d-flex flex-row flex-wrap align-items-center justify-content-between gap-1 w-100 mb-2'>
                <span className='para'>
                  Hourly relative humidity
                </span>
                <span className='para'>
                  {new Date(item.time).toLocaleTimeString('en', {
                    timeStyle: 'short',
                    timeZone: `${weatherData?.timezone}`,
                  })}
                </span>
              </div>
              <span className='title'>
                {item.relative_humidity_2m}{weatherData?.hourly_units?.relative_humidity_2m}
              </span>
              <span className='para'>
                Precipitation probability: {item.precipitation_probability}{weatherData?.hourly_units?.precipitation_probability}
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

HourlyHum.propTypes = {
  weatherData: PropTypes.object,
}

export default HourlyHum;
