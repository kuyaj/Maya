import React, { Component } from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import king from '../gallery/king.jpg'

import '../index.css'

class KingX extends Component {

render(){

return(

      <Modal 
      size="tiny"
      trigger={  
             <a>
        <Icon name="info" />
          Show Details
      </a>}>

      <Modal.Header> Madeline Sane </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size="big" src={ king }/>
             <Modal.Description>
                 <Header>Of Kings and Thieves</Header>
                 
                 <p className="justify">
                    He who was born from the darkness and forged in light, 
                    an eclipsed prince with both sun and shadows on the palm of
                    his hands. He will rise to claim the crown, beware, the night
                    king will come." 
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


export default KingX
