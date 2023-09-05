import React from 'react';
import Home from './home';
import Singlemovie from './Singlemovie';
import Error from './Error';
import {Routes, Route } from "react-router-dom";
import Offers from './Offers';

const App = () => {
  return<>
  
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/Offers" element={<Offers />}> </Route>
      <Route path="movie/:id" element={<Singlemovie />}> </Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
   
  </>
}  

export default App