import { bookRecommendAction } from "../reducers/BookRecommendSlice";


export const fetchBookRecommendData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "http://127.0.0.1:8000/api/books/home?sort=recommend"
            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };
    
        try {
            const bookRecommendData = await fetchData();
            dispatch(bookRecommendAction.getBookRecommend(bookRecommendData));
        } catch (error) {
            dispatch(bookRecommendAction.getFail());
        }
    };
}