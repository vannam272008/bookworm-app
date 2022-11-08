import { bookCartAction } from "../reducers/BookCartSlice";

export const placeOrder = (data, userId) => {
    const url = `../api/orders/${userId}`;
    const books = [];
    return async (dispatch) => {
        const sendRequest = async () => {
            console.log(data);
            console.log(JSON.stringify({ books: data }));
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ books: data }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Place order failed!");
            }
        };
        try {
            await sendRequest();
            dispatch(bookCartAction.postBookCart());
        } catch (error) {
            dispatch(bookCartAction.getFail());
        }
    };
};

export const isChangeShow = () => {
    return async (dispatch) => {
        try {
            dispatch(bookCartAction.isNotShow());
        } catch (error) {}
    };
};

export const isNotChangeShow = () => {
    return async (dispatch) => {
        try {
            dispatch(bookCartAction.isShow());
        } catch (error) {}
    };
};
