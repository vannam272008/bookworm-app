// import { concat } from "lodash";
import { bookShopAction } from "../reducers/BookShopSlice";
// const API_URL = process.env;



export const fetchBookShopData = (sort,show,page) => {
    return async (dispatch) => {
        // console.log(API_URL);
        const fetchData = async () => {
            const response = await fetch(
                `http://127.0.0.1:8000/api/books/filter?sort=${sort}&items_per_page=${show}&page=${page}`

            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };
    
        try {
            const bookShopData = await fetchData();
            dispatch(bookShopAction.getBookShop(bookShopData));
        } catch (error) {
            dispatch(bookShopAction.getFail());
        }
    };
}
