import {type} from './Store';

const reducer = (state, action)=>{
    switch(action.type){
        case type.sum :
            return state + 1
        case type.subtract :
            return state - 1
        case type.reset :
            return 0
        default:
            return state            
    }
}

export{
    reducer
}