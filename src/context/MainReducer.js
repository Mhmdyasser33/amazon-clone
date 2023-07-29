import * as actions from './Action'

export const initialState = {
    user : null ,
    basket : [] ,
}
/* export const calcProductTotal = (card) =>{
  let totalPrice = 0 ;
  for(let i = 0 ; i < card.length; i++){
    totalPrice  += card[i] ;
  }
  return totalPrice ;
} */
export const calcProductTotal = (productValue) =>{
     return productValue.reduce((prevValue , nextValue) =>{
         return prevValue + nextValue.price
     } , 0)
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
          basket : [...state.basket , action.item]
          }
          case actions.REMOVE_FROM_CARD:
            // store the index of product...!
            const productIndex =  state.basket.findIndex((product) =>{
              return product.id === action.id ;
            })
            // check if index greater or equal 0 start to remove index
            let newCard = [...state.basket] ;
            if(productIndex >= 0 ){
                  newCard.splice(productIndex , 1) ;
            }else{
                alert(`there is no product with this id ${productIndex}`) ;
            }
          return{
            ...state ,
            basket : newCard
          }
          case actions.EMPTY_CARD:
            return{
              ...state ,
              basket: [] ,
            }
      default :
      return state
     }
}
export default MainReducer ;