import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Base from './base'
import MenuX from './nav/menu'
import Cart from './cart'



class App extends Component {

render(){
return (

   <div>
        <Router>   
         <div>
           <br/>
            <Route exact path="/" component={ Base }/>
            <Route path="/cart" component={ Cart }/> 
         </div>    
       </Router>
   </div>

)
}
}

export default App