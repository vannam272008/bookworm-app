import BookBannerReducer from "./BookBannerSlice";
import BookRecommendReducer from "./BookRecommendSlice";
import BookPopularReducer from "./BookPopularSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        bookBanner: BookBannerReducer,
        bookRecommend: BookRecommendReducer,
        bookPopular: BookPopularReducer,
    }
});

export default store