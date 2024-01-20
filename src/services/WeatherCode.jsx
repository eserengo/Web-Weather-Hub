import DayClearSvg from '../assets/icons/dayClear.svg?react'
import DayCloudySvg from '../assets/icons/dayCloudy.svg?react'
import OvercastSvg from '../assets/icons/overcast.svg?react'
import FoggySvg from '../assets/icons/foggy.svg?react'
import DrizzleSvg from '../assets/icons/drizzle.svg?react'
import DayRainySvg from '../assets/icons/dayRainy.svg?react'
import DaySnowySvg from '../assets/icons/daySnowy.svg?react'
import ShowersSvg from '../assets/icons/showers.svg?react'
import StormySvg from '../assets/icons/stormy.svg?react'
import NightClearSvg from '../assets/icons/nightClear.svg?react'
import NightCloudySvg from '../assets/icons/nightCloudy.svg?react'
import NightRainySvg from '../assets/icons/nightRainy.svg?react'
import NightSnowySvg from '../assets/icons/nightSnowy.svg?react'
import PropTypes from 'prop-types'

const WeatherCode = ({ input, output, isDay }) => {
  if (isDay) {
    switch (true) {
      case (input === 0): {
        return (
          output === 'desc'
            ? 'Clear sky'
            : output === 'class'
              ? 'day-clear'
              : <i className='weather-icon'><DayClearSvg /></i>
        )
      }
      case (input === 1): {
        return (
          output === 'desc'
            ? 'Mainly clear'
            : output === 'class'
              ? 'day-mainly-clear'
              : <i className='weather-icon'><DayCloudySvg /></i>
        )
      }
      case (input === 2): {
        return (
          output === 'desc'
            ? 'Partly cloudy'
            : output === 'class'
              ? 'day-partly-cloudy'
              : <i className='weather-icon'><DayCloudySvg /></i>
        )
      }
      case (input === 3): {
        return (
          output === 'desc'
            ? 'Overcast'
            : output === 'class'
              ? 'day-overcast'
              : <i className='weather-icon'><OvercastSvg /></i>
        )
      }
      case (input < 40): {
        return null;
      } 
      case (input < 50): {
        return (
          output === 'desc'
            ? 'Fog'
            : output === 'class'
              ? 'day-foggy'
              : <i className='weather-icon'><FoggySvg /></i>
        )
      }
      case (input < 60): {
        return (
          output === 'desc'
            ? 'Drizzle'
            : output === 'class'
              ? 'day-drizzle'
              : <i className='weather-icon'><DrizzleSvg /></i>
        )
      }
      case (input < 70): {
        return (
          output === 'desc'
            ? 'Rain'
            : output === 'class'
              ? 'day-rainy'
              : <i className='weather-icon'><DayRainySvg /></i>
        )
      }
      case (input < 80): {
        return (
          output === 'desc'
            ? 'Snow'
            : output === 'class'
              ? 'day-snowy'
              : <i className='weather-icon'><DaySnowySvg /></i>
        )
      }
      case (input < 90): {
        return (
          output === 'desc'
            ? 'Showers'
            : output === 'class'
              ? 'day-showers'
              : <i className='weather-icon'><ShowersSvg /></i>
        )
      }
      case (input < 100): {
        return (
          output === 'desc'
            ? 'Storms'
            : output === 'class'
              ? 'day-stormy'
              : <i className='weather-icon'><StormySvg /></i>
        )
      }
      default:
        return null;
    }
  } else {
    switch (true) {
      case (input === 0): {
        return (
          output === 'desc'
            ? 'Clear sky'
            : output === 'class'
              ? 'night-clear'
              : <i className='weather-icon'><NightClearSvg /></i>
        )
      }
      case (input === 1): {
        return (
          output === 'desc'
            ? 'Mainly clear'
            : output === 'class'
              ? 'night-mainly-clear'
              : <i className='weather-icon'><NightCloudySvg /></i>
        )
      }
      case (input === 2): {
        return (
          output === 'desc'
            ? 'Partly cloudy'
            : output === 'class'
              ? 'night-partly-cloudy'
              : <i className='weather-icon'><NightCloudySvg /></i>
        )
      }
      case (input === 3): {
        return (
          output === 'desc'
            ? 'Overcast'
            : output === 'class'
              ? 'night-overcast'
              : <i className='weather-icon'><OvercastSvg /></i>
        )
      }
      case (input < 40): {
        return null;
      }
      case (input < 50): {
        return (
          output === 'desc'
            ? 'Fog'
            : output === 'class'
              ? 'night-foggy'
              : <i className='weather-icon'><FoggySvg /></i>
        )
      }
      case (input < 60): {
        return (
          output === 'desc'
            ? 'Drizzle'
            : output === 'class'
              ? 'night-drizzle'
              : <i className='weather-icon'><DrizzleSvg /></i>
        )
      }
      case (input < 70): {
        return (
          output === 'desc'
            ? 'Rain'
            : output === 'class'
              ? 'night-rainy'
              : <i className='weather-icon'><NightRainySvg /></i>
        )
      }
      case (input < 80): {
        return (
          output === 'desc'
            ? 'Snow'
            : output === 'class'
              ? 'night-snowy'
              : <i className='weather-icon'><NightSnowySvg /></i>
        )
      }
      case (input < 90): {
        return (
          output === 'desc'
            ? 'Showers'
            : output === 'class'
              ? 'night-showers'
              : <i className='weather-icon'><ShowersSvg /></i>
        )
      }
      case (input < 100): {
        return (
          output === 'desc'
            ? 'Storms'
            : output === 'class'
              ? 'night-stormy'
              : <i className='weather-icon'><StormySvg /></i>
        )
      }
      default:
        return null;
    }
  }
}

WeatherCode.propTypes = {
  input: PropTypes.number,
  output: PropTypes.string,
  isDay: PropTypes.number,
}

export default WeatherCode;