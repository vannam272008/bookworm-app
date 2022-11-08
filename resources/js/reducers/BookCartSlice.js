import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
    message: "",
    show: false,
};

const bookCartSlice = createSlice({
    name: "book-cart",
    initialState,
    reducers: {
        postBookCart(state) {
            state.success = true;
            state.message = "Order success!";
        },
        getFail(state) {
            state.success = false;
            state.message = "Order failed";
        },
        isShow(state) {
            state.show = false;
        },
        isNotShow(state) {
            state.show = true;
        },
    },
});

export const bookCartAction = bookCartSlice.actions;
export default bookCartSlice.reducer;
