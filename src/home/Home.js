import React from 'react'
import { Card, Container } from 'semantic-ui-react'


import behind from '../gallery/behind.jpg'
import heights from '../gallery/heights.png'
import king from '../gallery/king.jpg'
import diary from '../gallery/diary.jpg'
import alpha from '../gallery/alpha.png'
import romance from '../gallery/romance.jpg'
import heartbreak from '../gallery/heartbreak.jpg'
import premade from '../gallery/premade.jpg'
import fall from '../gallery/fall.jpg'
import undead from '../gallery/undead.png'
import dreamers from '../gallery/dreamers.jpg'
import heart from '../gallery/heartbreakers.jpg'

import BehindX from '../detail/behindX'
import HeightX from '../detail/heightX'
import KingX from '../detail/kingX'
import DiaryX from '../detail/diaryX'
import PremadeX from '../detail/premadeX'
import AlphaX from '../detail/alphaX'
import RomanceX from '../detail/romanceX'
import HeartbreakX from '../detail/heartbreakX'
import HeartX from '../detail/heartX'
import UndeadX from '../detail/undeadX'
import DreamersX from '../detail/dreamersX'
import FallX from '../detail/fallX'


const Home = () => (

<Container>
        <Card.Group itemsPerRow={4}>
         <Card
            image={ behind }
            size ='small'
            header="Behind The Girl"
            meta = "Mystery"
            extra={ <BehindX /> }
         />

         <Card
            image={ heights }
            size ='small'
            header='Heights'
            meta = "Romance"
            extra={ <HeightX/> }
         /> 

          <Card
            image={ king }
            size ='small'
            header='Of King and Thieves'
            meta = "Fan fiction"
            extra={ <KingX/> }
         /> 


          <Card
            image={ diary }
            size ='small'
            header="Bridget Jone's Diary "
            meta = "Fan fiction"
            extra={ <DiaryX/>}
         /> 

         <Card
            image={ premade }
            size ='small'
            header="Premades "
            meta = "Werewolf/Vampires"
            extra={ <PremadeX/> }
         />  

           <Card
            image={ alpha }
            size ='small'
            header="The Alpha Girl"
            meta = "Fan fiction"
            extra={ <AlphaX/>  }
         /> 

        <Card
            image={ romance }
            size ='small'
            header="Sophia"
            meta = "General Fiction"
            extra={ <RomanceX/> }
         />
         <Card
            image={ heartbreak }
            size ='small'
            header="Heartbreak City"
            meta = "Romance"
            extra={ <HeartbreakX/> }
         />  

          <Card
            image={ heart }
            size ='small'
            header='Hearbreakers'
            meta = "Teen Fiction"
            extra={ <HeartX/>}
        />

            <Card
            image={ undead }
            size ='small'
            header="Undead "
            meta = "Mystery/Thriller"
            extra={ <UndeadX/> } 
         />  
             
            <Card
            image={ dreamers }
            size ='small'
            header="The Dreamers"
            meta = "Mystery/Thriller"
            extra={ <DreamersX/>}
         />  
 
         <Card
            image={ fall }
            size ='small'
            header="Fall For You"
            meta = "Mystery/Thriller"
            extra={ <FallX/> }
         />   

    </Card.Group>
    </Container>
)

export default Home
