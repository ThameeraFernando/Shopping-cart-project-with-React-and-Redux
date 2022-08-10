import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    // console.log("action type clear cart");
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    console.log("increased the amount");
  }
  if (action.type === DECREASE) {
    console.log("decrease the amount");
  }
  if (action.type === REMOVE) {
    const { id } = action.payload;
    console.log("remove the item");
    console.log(id);
    const newCart = state.cart.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    return { ...state, cart: newCart };
  }
  return state;
};

export default reducer;

// console.log("Hello world");
// console.log({ state, action });
//   if (action.type === DECREASE) {
//     // console.log("action type decrease");
//     return { ...state, count: state.count - 1 };
//   }
//   if (action.type === INCREASE) {
//     // console.log("action type increase");
//     return { ...state, count: state.count + 1 };
//   }
// if (action.type === "RESET") {
//   // console.log("action type reset");
//   return { ...state, count: 0 };
// }
// if (action.type === "CHANGE_NAME") {
//   // console.log("action type change name");
//   return { ...state, name: "Thameera Fernando" };
// }
