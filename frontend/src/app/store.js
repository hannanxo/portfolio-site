import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/features/auth/authSlice";
import blogReducer from "../components/features/blogs/blogSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
