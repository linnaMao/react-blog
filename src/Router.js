import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import App from './App'
import Nav from './component/Nav'
import Footer from './component/Footer'
import BlogHome from './component/BlogHome'
import BlogTag from './component/BlogTag'
import BlogAbout from './component/BlogAbout'
import TagDetail from './component/TagDetail'
import Canvas from './component/Canvas'
import ArticleDetail from './component/ArticleDetail'

function Router() {
  return (
    <App>
      <BrowserRouter>
        <Canvas/>
        <Nav/>
        <Route path='/' exact component={BlogHome}></Route>
        <Route path='/tag' exact component={BlogTag}></Route>
        <Route path='/tag/:name' exact component={TagDetail}></Route>
        <Route path='/about' exact component={BlogAbout}></Route>
        <Route path='/detail:name' exact component={ArticleDetail}></Route>
      </BrowserRouter>
      <Footer/>
    </App>
  )
}

export default Router