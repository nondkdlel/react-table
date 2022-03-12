// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main';
import Detail from './pages/detail';
import Write from './pages/write';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Main /> }/>
        <Route exact path='/detail' element={ <Detail /> }/>
        <Route exact path='/write' element={ <Write /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
