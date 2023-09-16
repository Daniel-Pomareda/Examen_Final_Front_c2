import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Card from "../Components/Card";
import Contact from "../Routes/Contact";
import Detail from "../Routes/Detail";
import Favs from "../Routes/Favs";
import Home from "../Routes/Home";
import NoPages from "../Routes/NoPages";
import { ContextProvider } from "../Components/utils/global.context";
import "./index.css";


function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<NoPages/>}/>
          </Route>
          <Route path="/card" element={<Card/>}/>
          <Route path="/card/:id" element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App
