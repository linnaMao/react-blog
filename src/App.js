import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './component/Nav'
import BlogHome from './component/BlogHome'
import BlogTag from './component/BlogTag'
import BlogAbout from './component/BlogAbout'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Route path='/' exact component={BlogHome}></Route>
        <Route path='/tag' exact component={BlogTag}></Route>
        <Route path='/about' exact component={BlogAbout}></Route>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
