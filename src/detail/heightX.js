import React, { Component } from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import heights from '../gallery/heights.png'

import '../index.css'

class HeightX extends Component {

render(){

return (
  <Modal 
      size="tiny"
      trigger={  
             <a>
        <Icon name="info" />
          Show Details
      </a>}>

      <Modal.Header> Ashihara </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size="big" src={ heights }/>
             <Modal.Description>
                 <Header>Heights</Header>
                 
                 <p className="justify">
                   Wuthering Heights is Emily Brontë's only novel. Written between October 1845
                   and June 1846, Wuthering Heights was published in 1847 under the pseudonym 
                   "Ellis Bell". Brontë died the following year, aged 30.
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

export default HeightX
