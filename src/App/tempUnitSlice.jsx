import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'fahrenheit',
}

const tempUnitSlice = createSlice({
  name: 'tempUnit',
  initialState,
  reducers: {
    toggleTempUnit: (state) => {
      state.value === 'fahrenheit' ? state.value = 'celsius' : state.value = 'fahrenheit';
    }
  }
})

export default tempUnitSlice.reducer;
export const { toggleTempUnit } = tempUnitSlice.actions;