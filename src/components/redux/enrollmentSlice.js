import { createSlice } from '@reduxjs/toolkit';

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState: {
    selectedDate: null,
    selectedTimeSlot: null,
    userName: '',
    userAge: '',
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedTimeSlot: (state, action) => {
      state.selectedTimeSlot = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserAge: (state, action) => {
      state.userAge = action.payload;
    },
  },
});

export const {
  setSelectedDate,
  setSelectedTimeSlot,
  setUserName,
  setUserAge,
} = enrollmentSlice.actions;

export default enrollmentSlice.reducer;

