import { observable } from 'mobx'

class iStore {

// @observable cart = [ 
//                       "Behind The Girl",
//                       "Fall For You",
//                       "Mahal pa rin kita" 
                    
//                    ]

@observable story = [

    {
        title : "Safe Haven",
        url : "https://hips.hearstapps.com/sev.h-cdn.co/assets/17/02/980x1452/gallery-1484005021-safe-haven-xlg.jpg?resize=480:*",
        genra : "Romance"
    },
    {
        title : "The Fault In Our Stars",
        url : "http://www.craigerscinemacorner.com/Images/Fault-in-our-Stars-poster.jpg",
        genra : "Romance"
    }
]

}

const store = new iStore()

export default store
