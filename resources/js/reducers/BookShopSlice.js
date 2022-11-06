import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookShop: [],
    meta: [],
    success: false,
    isClicked: "sale",
};

const bookShopSlice = createSlice({
    name: "book-on-sale",
    initialState,
    reducers: {
        getBookShop(state, action) {
            state.bookShop = action.payload.data;
            state.meta = action.payload.meta;
            state.success = true;
            state.isClicked = "sale";
        },
        getFail(state) {
            state.success = false;
        },
    },
});

export const bookShopAction = bookShopSlice.actions;
export default bookShopSlice.reducer;
