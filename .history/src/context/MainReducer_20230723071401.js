
import * as actions from './Action'
export const initialState = {
    user : null ,
    cart : [] ,
}

const MainReducer = (state = initialState , action) =>{
     switch(action.type){
     case actions.ADD_USER:
        return {
             ...state ,
             user : action.user
        }
        case actions.
      default :
      return state
     }
}
export default MainReducer ;