import React, { Component } from 'react'
import {  Card, Container } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import '../index.css'




@observer
export default class Home extends Component {
render(){




    return (
       <div>
        <Container >
        <br/>   
        <Card.Group doubling itemsPerRow={5}>   
         {
           this.props.store.story.map((x, y) => {
            return(   
        
                             
                  <Card  
                      key={y}
                      raised
                      image={ x.url }
                      header={ x.name }
                   />
   
             
          
            )
           })
         }   
         </Card.Group>
        </Container>
       </div>
    )
  }

}



