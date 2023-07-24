
import * as actions from './Action'
export const initialState = {
    user : null ,
    card: [] ,
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
          card : [...state.action.item]
          }
      default :
      return state
     }
}
export default MainReducer ;