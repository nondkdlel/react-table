import { createSlice } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

const initialState = {
  title: '',
  writer: '',
  content: '',
};
// action을 정의해주고 dispatch에서 type과 state를 보내주면 되는데
export const writeFormSlice = createSlice({
  name: 'writeForm',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setWriter: (state, action) => {
      state.writer = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    reset: (state) => {
      state.title = '';
      state.writer = '';
      state.content = '';
    },
  },
});

const rootReducer = combineReducers({
  [writeFormSlice.name]: writeFormSlice.reducer,
});

export const store = createStore(rootReducer);
