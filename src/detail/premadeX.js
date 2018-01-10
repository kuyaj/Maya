import React,{ Component } from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import premade from '../gallery/premade.jpg'

import '../index.css'

class PremadeX extends Component { 

 render(){
 
 return(
 
    <Modal 
      size="tiny"
      trigger={  
             <a>
        <Icon name="info" />
          Show Details
      </a>}>

      <Modal.Header> Jowey </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size="medium" src={ premade }/>
             <Modal.Description>
                 <Header>Premade</Header>
                 
                 <p className="justify">
                    He's tall and massive. He has it all
                    it takes for Yllan to love AC and Lj 
                    on the part McConnell rooms for Von
                    Zundt with Xena and Jaira doing love.  
                 </p>

                   <p className="justify">
                    He's tall and massive. He has it all
                    it takes for Yllan to love AC and Lj 
                    on the part McConnell rooms for Von
                    Zundt with Xena and Jaira doing love.  
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

 export default PremadeX
