import { observable } from 'mobx'

class iStore {

// @observable cart = [ 
//                       "Behind The Girl",
//                       "Fall For You",
//                       "Mahal pa rin kita" 
                    
//                    ]

@observable story = [

    {
        name : "Uncensored",
        url : "https://a.wattpad.com/cover/38996221-352-k886297.jpg",
    },
    {
        name : "Love Songs For No One",
        url : "https://a.wattpad.com/cover/123309734-352-k164130.jpg",

    },
    {
        name : "Twenty-three : Eleven",
        url : "https://a.wattpad.com/cover/20323617-352-k349920.jpg",
    },
    {
        name: "Blown by the Wind",
        url :  "https://a.wattpad.com/cover/98878170-352-k375004.jpg",
    },
    {
        name: "Stupidly In Love Again",
        url : "https://a.wattpad.com/cover/81729695-352-k806919.jpg",
    },
    {
        name: "Heartless",
        url :  "https://a.wattpad.com/cover/8294706-352-k7970.jpg",
    },
    {
        name : 'The Living Arrow',
        url :  "https://a.wattpad.com/cover/57872844-352-k926810.jpg",
    },
    {
        name: "She Who Stole The Cupid's Arrow ",
        url :  "https://i.pinimg.com/originals/09/06/06/0906062f68038bcc69c4c01bf692d373.jpg"
    }
    
]

}

const store = new iStore()

export default store
