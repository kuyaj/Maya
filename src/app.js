import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Home from './home/Home'
import MenuX from './nav/menu'
import Cart from './cart'

// var React = require('react')
// var ReactRouter = require('react-router-dom')
// var Router = ReactRouter.Router
// var Route =  ReactRouter.Route

// var Home = require('./home/Home')
// var MenuX = require('./nav/menu')
// var Cart = require('./cart')


class App extends Component {

render(){
return (
    <Router>
      <div>
            <MenuX/>
            <Route exact path="/" component={ Home }/>
            <Route path="/cart" component={ Cart }/>
      </div>
    </Router>
)   
}
}

export default App