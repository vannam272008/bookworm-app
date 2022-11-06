import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    bookRecommend: [],
    isClicked: 'recommend',
    success: false,
}

const bookRecommendSlice = createSlice({
    name: 'book-recommend',
    initialState,
    reducers: {
        getBookRecommend(state, action){
            state.bookRecommend = action.payload.data;
            state.isClicked = 'recommend';
            state.success = true;
        },
        getFail(state){
            state.success = false;
        }
    }
});

export const bookRecommendAction = bookRecommendSlice.actions;
export default bookRecommendSlice.reducer;