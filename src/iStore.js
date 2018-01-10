import { observable } from 'mobx'

class iStore {

@observable cart = [ 
                      "Behind The Girl",
                      "Fall For You",
                      "Mahal pa rin kita" 
                    
                   ]
}

const store = new iStore()

export default store
