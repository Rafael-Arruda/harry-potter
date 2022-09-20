import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from './components/Footer';

import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <Header/>

      <Board/>

      <Footer/>
      
      <GlobalStyle/>
    </>
  );
}

export default App;
