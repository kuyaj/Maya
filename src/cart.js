import React, { Component } from 'react'
import { Container,Segment, Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react' 


@observer
class Cart extends Component {

render(){

return (
              <div>
                  {
                    this.props.store.cart.map((text, i) => {
                    return ( 
                   
                   <Container key={i} text > 
                    <Grid>
                         <Grid.Column>
                              <Segment
                                  className="margin" 
                                  key={i} 
                                  >
                                  {text}               
                              </Segment>
                           </Grid.Column>
                    </Grid>
                  </Container>
                       )
                    })  
                  }	        
       	     </div>
)
}
}


export default Cart