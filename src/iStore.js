import { observable } from 'mobx'

import behind from './gallery/behind.jpg'
import heights from './gallery/heights.png'
import king from './gallery/king.jpg'
import diary from './gallery/diary.jpg'
import alpha from './gallery/alpha.png'
import romance from './gallery/romance.jpg'
import heartbreak from './gallery/heartbreak.jpg'
import premade from './gallery/premade.jpg'
import fall from './gallery/fall.jpg'
import undead from './gallery/undead.png'
import dreamers from './gallery/dreamers.jpg'
import heart from './gallery/heartbreakers.jpg'

// import BehindX from './detail/behindX'
// import HeightX from './detail/heightX'
// import KingX from './detail/kingX'
// import DiaryX from './detail/diaryX'
// import PremadeX from './detail/premadeX'
// import AlphaX from './detail/alphaX'
// import RomanceX from './detail/romanceX'
// import HeartbreakX from './detail/heartbreakX'
// import HeartX from './detail/heartX'
// import UndeadX from './detail/undeadX'
// import DreamersX from './detail/dreamersX'
// import FallX from './detail/fallX'


class iStore {

// @observable cart = [ 
//                       "Behind The Girl",
//                       "Fall For You",
//                       "Mahal pa rin kita" 
                    
//                    ]

@observable story = [
    {
        header : "Behind the Girl",
        image : { behind },
        genra : "Vampire/Werewolf"

    }
]

}

const store = new iStore()

export default store
