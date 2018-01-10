import React, { Component } from 'react'
import { Modal, Button, Header, Image, Icon } from 'semantic-ui-react'

import fall from '../gallery/fall.jpg'


import '../index.css'

class FallX extends Component {


render (){


return (
    <Modal
      size="tiny"
      onClose={ this.close}
      trigger={  
             <a>
        <Icon name="info" />
          Show Details
      </a>}>

      <Modal.Header> Nikayla Hulbert </Modal.Header>
        <Modal.Content image>
          <Image wrapped size="large" src={ fall }/>
             <Modal.Description>
                 <Header> Fall For You </Header>
                 
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

                <Button 
                        color='black'
                        onClick={this.close}
                >
                        Nopes
                </Button>
                            <Button 
                                    color='teal'
                                    icon='checkmark'
                                    labelPosition='right'
                                    content='Get on cart'
                                    onClick={this.click}
                            />
                        </Modal.Actions>
    </Modal>
)}
}

export default FallX

