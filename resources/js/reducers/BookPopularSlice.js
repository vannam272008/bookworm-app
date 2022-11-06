import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    bookPopular: [],
    isClicked: 'popular',
    success: false,
}

const bookPopularSlice = createSlice({
    name: 'book-popular',
    initialState,
    reducers: {
        getBookPopular(state, action){
            state.bookPopular = action.payload.data;
            state.isClicked = 'popular';
            state.success = true;
        },
        getFail(state){
            state.success = false;
        }
    }
});

export const bookPopularAction = bookPopularSlice.actions;
export default bookPopularSlice.reducer;