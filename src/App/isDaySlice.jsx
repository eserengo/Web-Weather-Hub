import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

const isDaySlice = createSlice({
  name: 'isDay',
  initialState,
  reducers: {
    setIsDay: (state, action) => {
      state.value = action.payload;
    }
  }
})

export default isDaySlice.reducer;
export const { setIsDay } = isDaySlice.actions;