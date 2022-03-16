import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { combineReducers } from 'redux';

const initialState = {
  title: '',
  writer: '',
  content: '',
};

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

const mainInitialState = {
  list: [],
};

export const apiThunk = createAsyncThunk('apis', async () => {
  const res = await axios.get('https://crudcrud.com/api/00b7be8bd7924e45a811ca7d9f1db4ed/unicorns');
  return res.data;
});

export const mainDataSlice = createSlice({
  name: 'mainData',
  initialState: mainInitialState,
  reducers: {
    numSort: (state, action) => {
      const sortType = action.payload;
      // console.log(sortType);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiThunk.fulfilled, (state, action) => {
      const dataList = action.payload;
      state.list = dataList;
      // console.log(dataList);
      // dataList.forEach((data) => {
      //   data.isVisible = false;
      // });
    });
  },
});

const keywordState = {
  keyword: '',
};

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState: keywordState,
  reducers: {
    setTitle: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

const defaultPage = { page: 1 };

export const pageNaviSlice = createSlice({
  name: 'pageNavi',
  initialState: defaultPage,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  [writeFormSlice.name]: writeFormSlice.reducer,
  [keywordSlice.name]: keywordSlice.reducer,
  [mainDataSlice.name]: mainDataSlice.reducer,
  [pageNaviSlice.name]: pageNaviSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
