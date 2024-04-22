
import {createSlice} from '@reduxjs/toolkit';


const productSlice = createSlice({

    name : 'product',
    initialState:{

        activePage: 1,
        moviePageStore: {}
    },

    reducers : {
        setActivePage(state , action){
            state.activePage = action.payload; 

    },
        setMoviePageStore(state , action){
            state.moviePageStore = action.payload;
        }
})