import { createSlice } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

const initialState = {
  title: '',
};

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

const rootReducer = combineReducers({
  [titleSlice.name]: titleSlice.reducer,
});

export const store = createStore(rootReducer);