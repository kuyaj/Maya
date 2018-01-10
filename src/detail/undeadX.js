import React, { Component } from 'react'
import { Modal, Button,Header,Image, Icon} from 'semantic-ui-react'


import undead from '../gallery/undead.png'

import '../index.css'

class UndeadX extends Component {

render(){

return(

     <Modal
       size='tiny'
       trigger={  
             <a>
        <Icon name="info" />
         Show Details
      </a>}>

      <Modal.Header> Mapleleafx </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size='large' src={ undead }/>
             <Modal.Description>
                 <Header> Undead </Header>
                 
                 <p className="justify  ">
                     The dead is coming in town. And they all were serious, they were chased
                     every now and then. And most of the time, they get things that literally
                     is doing a lot of the things that they think that don't matters on the 
                     field. Craziness are getting on the people while they are running from
                     the one those monsters.
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
)}
}

export default UndeadX
