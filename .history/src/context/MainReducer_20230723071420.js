
import * as actions from './Action'
export const initialState = {
    user : null ,
    car: [] ,
}

const MainReducer = (state = initialState , action) =>{
     switch(action.type){
     case actions.ADD_USER:
        return {
             ...state ,
             user : action.user
        }
        case actions.ADD_TO_CARD:
          return {
          ...state ,
          card
          }
      default :
      return state
     }
}
export default MainReducer ;