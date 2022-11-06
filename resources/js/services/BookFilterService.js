import { bookFilterAction } from "../reducers/BookFilterSlice";


export const fetchBookFilterData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "http://127.0.0.1:8000/api/filters"
            );
            if (!response.ok) {
                throw new Error("Cannot fetch Data!");
            }
            const data = await response.json();
            return data;
        };
    
        try {
            const bookFilterData = await fetchData();
            dispatch(bookFilterAction.getBookFilter(bookFilterData));
        } catch (error) {
            dispatch(bookFilterAction.getFail());
        }
    };
}