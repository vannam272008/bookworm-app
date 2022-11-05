import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    books: [],
    success: false,
  }

const bookBannerSlice =  createSlice({
    name:'book-banner',
    initialState,
    reducers: {
        getBooks(state, action){
            state.books = action.payload.data;
            state.success = true;
        },
        getFail(state){
            state.success = false;
        }
    }
});

export const bookBannerAction = bookBannerSlice.actions;
export default bookBannerSlice.reducer;