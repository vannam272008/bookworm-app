import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookShop: [],
    meta: [],
    success: false,
};

const bookShopSlice = createSlice({
    name: "book-shop",
    initialState,
    reducers: {
        getBookShop(state, action) {
            state.bookShop = action.payload.data;
            state.meta = action.payload.meta;
            state.success = true;
        },
        getFail(state) {
            state.success = false;
        },
    },
});

export const bookShopAction = bookShopSlice.actions;
export default bookShopSlice.reducer;
