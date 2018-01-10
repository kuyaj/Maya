import React, { Component } from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import behind from '../gallery/behind.jpg'


import '../index.css'

class BehindX extends Component {

render(){

return (
        <Modal size="tiny" trigger={  
             <a>
        <Icon name="info" />
          Show Details
      </a>}>

      <Modal.Header> Nikki Hulland</Modal.Header>
        <Modal.Content image>
    
                 <Image wrapped size="big" src={ behind }/> 
             <Modal.Description>
                 <Header>Behind the Girl </Header>
                 
                 <p className="justify">
                    France, 1916. Sophie Lefevre must keep her family safe whilst her adored
                    husband Edouard fights at the front. When she is ordered to serve the German
                     officers who descend on her hotel each evening, her home becomes riven by
                      fierce tensions. 
                 </p>
               
             </Modal.Description>
               
        </Modal.Content>
         <Modal.Actions>
                            <Button color='black'
                                    onClick={this.close}>
                            Nope
                            </Button>
                            <Button color="red"
                                    icon='checkmark'
                                    labelPosition='right'
                                    content='Get on cart'
                                    onClick={this.close}/>
                        </Modal.Actions>
    </Modal>
)}
}
export default BehindX
