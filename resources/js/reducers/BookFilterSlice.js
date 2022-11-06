import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    bookFilter: [],
    success: false,
}

const bookFilterSlice =  createSlice({
    name:'book-filter',
    initialState,
    reducers: {
        getBookFilter(state, action){
            state.bookFilter = action.payload;
            state.success = true;
        },
        getFail(state){
            state.success = false;
        }
    }
});

export const bookFilterAction = bookFilterSlice.actions;
export default bookFilterSlice.reducer;