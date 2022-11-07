import BookBannerReducer from "./BookBannerSlice";
import BookRecommendReducer from "./BookRecommendSlice";
import BookPopularReducer from "./BookPopularSlice";
import BookShopReducer from "./BookShopSlice";
import BookFilterReducer from "./BookFilterSlice";
import { configureStore } from "@reduxjs/toolkit";
import BookDetailReducer from "./BookDetailSlice";
import BookShopFilterReducer from "./BookShopFilterSlice";

const store = configureStore({
    reducer: {
        bookBanner: BookBannerReducer,
        bookRecommend: BookRecommendReducer,
        bookPopular: BookPopularReducer,
        bookShop: BookShopReducer,
        bookFilter: BookFilterReducer,
        bookShopFilter: BookShopFilterReducer,
        bookDetail: BookDetailReducer,
    },
});

export default store;
