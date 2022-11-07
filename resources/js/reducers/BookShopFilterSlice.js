import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookShopFilter: [],
    meta: [],
    success: false,
};

const bookShopFilterSlice = createSlice({
    name: "book-filter",
    initialState,
    reducers: {
        getBookShopFilter(state, action) {
            state.bookShopFilter = action.payload.data;
            state.meta = action.payload.meta;
            state.success = true;
        },
        getFail(state) {
            state.success = false;
        },
    },
});

export const bookShopFilterAction = bookShopFilterSlice.actions;
export default bookShopFilterSlice.reducer;
