import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookInfo: [],
    countStar: [],
    reviews: [],
    meta: [],
    success: false,
};

const bookDetailSlice = createSlice({
    name: "book-detail",
    initialState,
    reducers: {
        getBookDetail(state, action) {
            state.bookInfo = action.payload.book;
            state.reviews = action.payload.reviews.data;
            state.countStar = action.payload.star_count_reviews;
            state.meta = action.payload.reviews.meta;
            state.success = true;
        },
        getFail(state) {
            state.success = false;
        },
    },
});

export const bookDetailAction = bookDetailSlice.actions;
export default bookDetailSlice.reducer;
