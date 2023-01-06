import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Test from './pages/Test';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
