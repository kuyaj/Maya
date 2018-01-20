import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home/Home'
import MenuX from './nav/menu'
import Cart from './cart'



class App extends Component {

render(){
return (
        <Router>   
         <div>
           <br/>
            <Route exact path="/" component={ Home }/>
            <Route path="/cart" component={ Cart }/> 
         </div>    
       </Router>


)
}
}

export default App