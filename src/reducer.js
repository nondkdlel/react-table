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
  const res = await axios.get('https://crudcrud.com/api/59f649367af44f049dde37384150d745/unicorns');
  return res.data;
});

export const mainDataSlice = createSlice({
  name: 'mainData',
  initialState: mainInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(apiThunk.fulfilled, (state, action) => {
      const dataList = action.payload;
      console.log(dataList);
      dataList.forEach((data) => {
        data.isVisible = false;
      });
      state.list = dataList;
    });
  },
});

// const tableState = {
//   data: [],
// };

// export const tableDataSlice = createSlice({
//   name: 'tableData',
//   initialState: tableState,
//   reducers:{},
//   extraReducers: (builder) => {
//     builder.addCase(apiThunk.fulfilled, (state, action) => {

//     });
//   },
// });

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

const rootReducer = combineReducers({
  [writeFormSlice.name]: writeFormSlice.reducer,
  [keywordSlice.name]: keywordSlice.reducer,
  [mainDataSlice.name]: mainDataSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
