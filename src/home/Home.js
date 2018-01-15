import React, { Component } from 'react'
import {  Card, Image, Container } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import '../index.css'



@observer
export default class Home extends Component {
render(){




    return (
       <div>
         
         {
           this.props.store.story.map((stories, i) => {
            return(
              <Container >
               <br/>              
                <Card.Group itemsPerRow={4}>
                  <Card>
                    <Image src={ stories.url } />
                  </Card>
                </Card.Group>
                
              </Container>
            )
           })
         }
       </div>
    )
  }

}




