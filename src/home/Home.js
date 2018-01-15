import React, { Component } from 'react'
import { Grid, Card, Container } from 'semantic-ui-react'
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
                        <Card key={i}
                          image={ stories.url }
                          header={ stories.title }
                          meta ={ stories.genra }
                        />
                     </Card.Group>
        
            </Container>
            )
           })
         }
       </div>
    )
  }

}




