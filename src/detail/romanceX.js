import React, { Component } from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import romance from '../gallery/romance.jpg'

import '../index.css' 

class RomanceX extends Component {

render(){

return (

      <Modal
       size='tiny'
       trigger={  
             <a>
        <Icon name="info" />
         Show Details
      </a>}>

      <Modal.Header> Anna Linde </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size='small' src={ romance }/>
             <Modal.Description>
                 <Header> Sophia </Header>
                 
                 <p className="justify">
                     She might be the girl you'll want to 
                     be around with. 
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
)
}
}

export default RomanceX
