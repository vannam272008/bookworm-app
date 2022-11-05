import { bookBannerAction } from "../reducers/BookBannerSlice";


export const fetchBookBannerData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "http://127.0.0.1:8000/api/books/sort?sort=top_sale"
            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };
    
        try {
            const bookBannerData = await fetchData();
            dispatch(bookBannerAction.getBooks(bookBannerData));
        } catch (error) {
            dispatch(bookBannerAction.getFail());
        }
    };
}
