import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from './App'
import Nav from './component/Nav'
import Footer from './component/Footer'
import BlogHome from './component/BlogHome'
import BlogTag from './component/BlogTag'
import BlogAbout from './component/BlogAbout'
import TagDetail from './component/TagDetail'
import Canvas from './component/Canvas'

function Router() {
  return (
    <App>
      <BrowserRouter>
      <Canvas></Canvas>
        <Nav></Nav>
        <Route path='/' exact component={BlogHome}></Route>
        <Route path='/tag/:name' exact component={TagDetail}></Route>
        <Route path='/tag' exact render={() => 
          <BlogTag>
              
          </BlogTag>
        }>
        </Route>
        <Route path='/about' exact component={BlogAbout}></Route>
      </BrowserRouter>
      <Footer></Footer>
    </App>
  )
}

export default Router