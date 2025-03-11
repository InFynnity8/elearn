import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { name: "General Science", icon: "TestTube2", isActive: false },
    { name: "General Arts", icon: "Book", isActive: false },
    { name: "Business", icon: "BriefcaseBusiness", isActive: false },
    { name: "Home Economics", icon: "CookingPot", isActive: false },
    { name: "Visual Arts", icon: "Paintbrush", isActive: false },
];

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    activateCourse: (state, action) => {
      return state.map((course, index) => ({
        ...course,
        isActive: index === action.payload, // Activate only the clicked one
      }));
    },
  },
});

export const { activateCourse } = courseSlice.actions;
export default courseSlice.reducer;
