import React, { Component } from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import heart from '../gallery/heartbreakers.jpg'

import '../index.css'

class HeartX extends Component {

render(){

return(
    <Modal
      size='tiny'
       trigger={  
             <a>
        <Icon name="info" />
         Show Details
      </a>}>

      <Modal.Header> Ali Novak </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size='big' src={ heart }/>
             <Modal.Description>
                 <Header> Heartbreakers </Header>
                 
                 <p className="justify">
                     She's the heartbreaker. And everyone in town she can
                     break every guys heart in town. She owns the world of
                     every lad that might get on her front rows cause good
                     at that luring anyone to her realm.
                 </p>
                 
         
             </Modal.Description>
               
        </Modal.Content>
         <Modal.Actions>
                            <Button color='black'
                                    onClick={this.close}>
                            Nope
                            </Button>
                            <Button color='teal'
                                    icon='checkmark'
                                    labelPosition='right'
                                    content='Get on cart'
                                    onClick={this.close}/>
                        </Modal.Actions>
    </Modal>
)
}
}

export default HeartX
