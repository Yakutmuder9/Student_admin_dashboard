import { createSlice } from '@reduxjs/toolkit'


export const courseSlice = createSlice({
    
  name: 'course',
  initialState: {
      courseList:[],
      showCourse: false
  },
  reducers: {
    addCourse: (state,action) => {
        const newCourse = action.payload;
        const existCourse = state.itemList.find((item) =>item.courseNum === newCourse.courseNum);

        if(existCourse) {
            return<div>This Course is Alredy purchased!</div>
        }else{
            state.courseList.push({
                courseNum: newCourse.courseNum,
                titel: newCourse.titel,
                dicription: newCourse.dicription,
                url: newCourse.url

            })
        }
    },
    removeCourse() {},
    setCourseList: (state) => {
      state.showCourse = true;
    },
  },
})

export const courseAction = courseSlice.actions;

export default courseSlice;