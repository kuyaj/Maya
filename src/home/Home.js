import React, { Component } from 'react'
import {  Card, Image, Header, Button, Container } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import '../index.css'




@observer
export default class Home extends Component {

erase(i){
  this.props.store.remove(i)
}

render(){

    return (
       <div>
        <Container >
        <br/>   
        <Card.Group doubling itemsPerRow={5}>   
         {
           this.props.store.story.map((x, i) => {
            return(                               
                  <Card  
                      key={i}
                      raised
                   >
                   {/* <Image src={ x.url } /> */}
                    <Card.Content
                      header={x.name}
                  
                      meta={
                      <Button
                          fluid
                          color="purple" 
                          onClick={this.erase.bind(this)}
                          content="Remove"
                      />
                      }
                    />
                  </Card>
            )
           })
         }   
         </Card.Group>
        </Container>
       </div>
    )
  }

}



