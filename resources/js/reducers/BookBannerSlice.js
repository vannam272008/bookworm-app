import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    bookBanner: [],
    success: false,
}

const bookBannerSlice =  createSlice({
    name:'book-banner',
    initialState,
    reducers: {
        getBookBanner(state, action){
            state.bookBanner = action.payload.data;
            state.success = true;
        },
        getFail(state){
            state.success = false;
        }
    }
});

export const bookBannerAction = bookBannerSlice.actions;
export default bookBannerSlice.reducer;