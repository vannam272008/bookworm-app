import { bookDetailAction } from "../reducers/BookDetailSlice";

export const fetchBookDetailData = (bookId, sort, show, page) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `http://127.0.0.1:8000/api/books/${bookId}/reviews/filter?sort=${sort}&items_per_page=${show}&page=${page}`
            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };

        try {
            const bookDetailData = await fetchData();
            dispatch(bookDetailAction.getBookDetail(bookDetailData));
        } catch (error) {
            dispatch(bookDetailAction.getFail());
        }
    };
};

export const fetchBookDetailFilterReviewData = (
    bookId,
    rating_star,
    sort,
    show,
    page
) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `http://127.0.0.1:8000/api/books/${bookId}/reviews/filter?star=${rating_star}&sort=${sort}&items_per_page=${show}&page=${page}`
            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };

        try {
            const bookDetailData = await fetchData();
            dispatch(bookDetailAction.getBookDetail(bookDetailData));
        } catch (error) {
            dispatch(bookDetailAction.getFail());
        }
    };
};
