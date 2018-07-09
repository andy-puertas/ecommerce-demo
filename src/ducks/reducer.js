const initialState = {
  productid: 0,
  quantity: 1,
  //total: 0
}

const ADD_CART = 'ADD_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';


export default function reducer(state=initialState, action) {
  let {type, payload} = action
    console.log(payload)
    switch(type) {
      case ADD_CART:
            return Object.assign( {}, state, {
                productid: payload.productid,
                quantity: payload.quantity,
                // total: state.total += action.price
            } );
      case INCREASE_QUANTITY:
            return Object.assign({}, state, {
                quantity: payload.quantity + 1

            });

      case DECREASE_QUANTITY:
            return Object.assign({}, state, {
                quantity: payload.quantity - 1
            })
            default:
              return state;  
    } 
}

export function addCart(carty) {
  console.log(carty)
  return {
      type: ADD_CART,
      payload: 
          carty
  }
}

export function increaseQuantity(quantity) {
  console.log(quantity)
  return {
      type: INCREASE_QUANTITY,
      payload:
          quantity
  }
}

export function decreaseQuantity(quantity) {
  console.log(quantity)
  return {
      type: DECREASE_QUANTITY,
      payload:
          quantity
  }
}