import { configureStore } from '@reduxjs/toolkit';
import courseSlice from '../Features/CourseSlice/CourseSlice';

export const store =  configureStore({
  reducer: {
    course: courseSlice.reducer
  },
});


