import { configureStore } from '@reduxjs/toolkit'
import userLocationReducer from './userLocationSlice'
import isDayReducer from './isDaySlice'
import tempUnitReducer from './tempUnitSlice'

const store = configureStore({
  reducer: {
    userLocation: userLocationReducer,
    isDay: isDayReducer,
    tempUnit: tempUnitReducer,
  }
})

export default store;