import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  data: {
    city: '',
    country: '',
    latitude: '',
    longitude: '',
  },
  hasError: '',
}

export const fetchUserLocation = createAsyncThunk(
  'fetchUserLocation',
  async() => {
    return await axios
      .get('https://api.geoapify.com/v1/ipinfo?&apiKey=bcdafe8ef24743468c9b80e1c9e0a749')
      .then(response => response.data)
  })

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserLocation.pending, state => {
      state.isLoading = true
    });
    builder.addCase(fetchUserLocation.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.city = action.payload.city.name
      state.data.country = action.payload.country.name
      state.data.latitude = action.payload.location.latitude.toFixed(2)
      state.data.longitude = action.payload.location.longitude.toFixed(2)
    });
    builder.addCase(fetchUserLocation.rejected, (state, action) => {
      state.isLoading = false
      state.hasError = action.error.message
    })
  }
})

export default userLocationSlice.reducer;