import { bookPopularAction } from "../reducers/BookPopularSlice";


export const fetchBookPopularData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "http://127.0.0.1:8000/api/books/home?sort=top_popular"
            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };
    
        try {
            const bookPopularData = await fetchData();
            dispatch(bookPopularAction.getBookPopular(bookPopularData));
        } catch (error) {
            dispatch(bookPopularAction.getFail());
        }
    };
}