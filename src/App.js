import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contant from './components/Contant';
import Home from './components/Home';
import Post from './components/Post';
import Blog from './components/Blog';

class App extends Component{
  
  render(){
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contant} />
              <Route path="/:post_id" component={Post} />
              <Route pathname="/about/:blog_id" component={Blog} />

            </Switch>
      </div>

        </BrowserRouter>

    )
  }
}

export default App;