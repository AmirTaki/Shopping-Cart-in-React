
import './App.css';

import Layout from  "./components/Layout";
import Header from "./components/Header";
import CarTab from "./components/CarTab";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout />}/>
          
        </Routes>
      </BrowserRouter>  
    </>

  )
}

export default App
