import { concat } from "lodash";
import { bookBannerAction } from "../reducers/BookBannerSlice";
// const API_URL = process.env;



export const fetchBookBannerData = () => {
    return async (dispatch) => {
        // console.log(API_URL);
        const fetchData = async () => {
            const response = await fetch(
                "http://127.0.0.1:8000/api/books/home?sort=top_sale"
            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };
    
        try {
            const bookBannerData = await fetchData();
            dispatch(bookBannerAction.getBookBanner(bookBannerData));
        } catch (error) {
            dispatch(bookBannerAction.getFail());
        }
    };
}
