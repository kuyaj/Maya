import React, { Component }from 'react'
import { Modal, Button, Header, Image, Icon } from 'semantic-ui-react'

import heartbreak from '../gallery/heartbreak.jpg'

import '../index.css'

class HeartbreakX extends Component {

render(){

return (
 <Modal 
      size="tiny"
      trigger={  
             <a>
        <Icon name="info" />
          Show Details
      </a>}>

      <Modal.Header> Nikayla Hulbert </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size="large" src={ heartbreak }/>
             <Modal.Description>
                 <Header> Heartbreak City</Header>
                 
                 <p className="justify">
                    Ella Vaporsky is a painter, 
                    or would be if she were able
                    to take herself seriously. 
                    For eight years she and her
                    college sweetheart, Stephen, 
                    a composer, have been a perfect couple.
                 </p>
                 <p className="justify">   
                    But Ella, bored and inexplicably
                    self-destructive, is conducting an 
                    obsessive affair with Frank, 
                    a married photographer.
                 </p>

             </Modal.Description>
               
        </Modal.Content>
         <Modal.Actions>
                            <Button color='black'
                                    onClick={this.close}>
                            Nope
                            </Button>
                            <Button color='red'
                                    icon='checkmark'
                                    labelPosition='right'
                                    content='Get on cart'
                                    onClick={this.close}/>
                        </Modal.Actions>
    </Modal>
)}
}

export default HeartbreakX
