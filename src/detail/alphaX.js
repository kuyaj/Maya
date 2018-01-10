import React, { Component }from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import alpha from '../gallery/alpha.png'

import '../index.css'

class AlphaX extends Component {

state = { open : true }

close = () => this.setState({ open : false })

render() {

return (

      <Modal 
      size="tiny"
      trigger={  
             <a>
        <Icon name="info" />
          Show Details
      </a>}>

      <Modal.Header> Angelo Von Zundt </Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size='large' src={ alpha }/>
             <Modal.Description>
                 <Header>The Alpha Girl</Header>
                 
                 <p className="justify"> 
                    One stupid party. 
                    One stupid boy. 
                    One stupid kiss. 
                    And my life was virtually over.

                    Tessa McCaide has a unique talent for getting into trouble. 
                    Then again, it isn’t easy for a girl with psychic visions 
                    to ignore what she sees. 

                 </p>

                   <p className="justify">
                    Luckily Tessa and her family are 
                    leaving California and moving halfway 
                    across the country, giving her the perfect 
                    opportunity to leave her reputation as 
                    “Freaky Tessa” behind.
                 </p>
                 
         
             </Modal.Description>
               
        </Modal.Content>
         <Modal.Actions>
                            <Button color='black'
                                    onClick={this.close.bind(this)}>
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

export default AlphaX
