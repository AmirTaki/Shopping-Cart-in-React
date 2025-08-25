
import './App.css';

import Layout from  "./components/Layout"
import Header from "./components/Header";
import CarTab from "./components/CarTab"
function App() {

  return (
    <>
      <h1 class="text-3xl font-bold underline text-red-200">
        Hello world!
       </h1>
       <Layout />
      <Header />
      <CarTab />

    </>
  )
}

export default App
