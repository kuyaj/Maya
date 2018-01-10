import React, { Component } from 'react'
import { Modal, Button,Header, Image, Icon} from 'semantic-ui-react'

import diary from '../gallery/diary.jpg'
import '../index.css'

class DiaryX extends Component {

render(){

return (
     <Modal 
      size='tiny'
      trigger={  
             <a>
        <Icon name="info" />
         Show Details
      </a>}>

      <Modal.Header> Helen Fielding</Modal.Header>
        <Modal.Content image>
    
                <Image wrapped size='big' src={ diary }/>

             <Modal.Description>
                 <Header>Bridget Jones Diary</Header>
                 
                 <p className="justify">
                 At the start of the New Year, 32-year-old Bridget 
                 (Renée Zellweger) decides it's time to take control 
                 of her life - and start keeping a diary.
                 </p>

                 <p className="justify">
                   Now, the most
                   provocative, erotic and hysterical book on her bedside 
                   table is the one she's writing. 
                 </p>

                 <p className="justify">
                   With a taste for adventure, 
                   and an opinion on every subject - from exercise to men to food
                   to sex and everything in between - she's turning the page on a 
                   whole new life.
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

export default DiaryX
