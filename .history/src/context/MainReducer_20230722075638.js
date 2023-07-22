
import * as actions from './Action'
export const initialState = {
    user : null ,
    cart : cart ,
}

const MainReducer = (state = initialState , action) =>{
     switch(action.type){
     case actions.ADD_USER:
        return {
             ...state ,
             user : action.user
        }
      default :
      return state
     }
}
export default MainReducer ;