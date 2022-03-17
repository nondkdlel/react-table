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
  const res = await axios.get('https://crudcrud.com/api/851af311e20445928461272b2d866b56/unicorns');
  return res.data;
});

export const mainDataSlice = createSlice({
  name: 'mainData',
  initialState: mainInitialState,
  reducers: {
    titleSort: (state, action) => {
      const tmpDataList = JSON.parse(JSON.stringify(action.payload));

        for (let i = 1; i < tmpDataList.length; i += 1) {
          const cur = tmpDataList[i];
          let left = i - 1;
          while (left >= 0 && tmpDataList[left].title > cur.title) {
            tmpDataList[left + 1] = tmpDataList[left];
            left -= 1;
          }
          tmpDataList[left + 1] = cur;
        }
      state.list = tmpDataList;
    },
    writerSort: (state, action) => {
      const tmpDataList = JSON.parse(JSON.stringify(action.payload));
      for (let i = 1; i < tmpDataList.length; i += 1) {
        const cur = tmpDataList[i];
        let left = i - 1;
        while (left >= 0 && tmpDataList[left].writer > cur.writer) {
          tmpDataList[left + 1] = tmpDataList[left];
          left -= 1;
        }
        tmpDataList[left + 1] = cur;
      }
    state.list = tmpDataList;
    },
    dateSort: (state, action) => {
      const tmpDataList = JSON.parse(JSON.stringify(action.payload));
      for (let i = 1; i < tmpDataList.length; i += 1) {
        const cur = tmpDataList[i];
        let left = i - 1;
        while (left >= 0 && tmpDataList[left].date > cur.date) {
          tmpDataList[left + 1] = tmpDataList[left];
          left -= 1;
        }
        tmpDataList[left + 1] = cur;
      }
    state.list = tmpDataList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiThunk.fulfilled, (state, action) => {
      const dataList = action.payload;
      state.list = dataList;
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
