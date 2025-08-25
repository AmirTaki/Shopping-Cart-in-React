
import './App.css';

import Layout from  "./components/Layout";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Layout />}>
              <Route index element = {<Home />}  />
              <Route path = ":/slug" element = {<Detail />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
// https://www.youtube.com/watch?v=NJ1inoC1L1k&list=PLe28tn1x4EIYkPFBrutgP-j1Pe8edxLiz