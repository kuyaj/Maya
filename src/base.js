import React,  {Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import { observer } from 'mobx-react'


@observer
class Base extends Component {

render(){

    return (
      <div>
        {
         this.props.store.story.map((stories, i) => {
         return (
            <Container>
            <Card.Group itemsPerRow={4}>
              <Card
                   image={ stories.image }
                   header={ stories.header }
                   meta = "Mystery"
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

export default Base
