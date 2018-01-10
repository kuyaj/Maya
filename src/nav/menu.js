import React, { Component } from 'react'
import { Menu, MenuItem, Input } from 'semantic-ui-react'
import { BrowserRouter as Link } from 'react-router-dom'

//import Home from './home/Home'
//import Cart from './cart'


class MenuX extends Component { 

    state = { xItem : 'home' }
    click = (e, { name }) => this.setState({ xItem : name})

    render() {
    
    const { xItem } = this.state
    
    return (

      <div>
  
           <Menu pointing
                 secondary
                 color="red"
            >
                             
               {/* <MenuItem>
                     <Dropdown>
                         <Dropdown.Menu>
                             <Dropdown.Item text="Sign Up" to="/login" as={Link}/>
                         </Dropdown.Menu>
                      </Dropdown>
               </MenuItem> */}

              

               <MenuItem header 
                         icon="circle outline"
                         content="Story House"
               />
              


              <MenuItem
                name='home'
                active={xItem==='home'}
                onClick={this.click}
                to="/"
                icon="book"
                content="Library"
                as={Link}
               /> 
                
              <MenuItem
                name='cart'
                active={xItem==='cart'}
                onClick={this.click}
                to="/cart"
                icon="cart"
                content="Cart"
                as={Link}
               />    

                <Menu.Item position="right">
                 <Input className="icon" 
                        icon="search"
                         placeholder="Search stories..."
                 />
               </Menu.Item>
         
           </Menu>

          {/* <Route path="/login" component={ Login }/> */}
      </div>

    )
    }
}
  export default MenuX
