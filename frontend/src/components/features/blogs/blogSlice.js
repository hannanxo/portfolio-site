import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get blogs
export const getBlogs = createAsyncThunk("blogs/getAll", async (_, thunkAPI) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getBlogs.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
