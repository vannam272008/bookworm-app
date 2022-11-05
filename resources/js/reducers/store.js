import BookBannerReducer from "./BookBannerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        bookBanner: BookBannerReducer,
    }
});

export default store