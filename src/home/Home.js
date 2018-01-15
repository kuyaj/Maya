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
        <Card.Group itemsPerRow={4}>
         {
           this.props.store.story.map((x, y) => {
            return(                                 
                  <Card 
                      key={y}
                      image={ x.url } 
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




