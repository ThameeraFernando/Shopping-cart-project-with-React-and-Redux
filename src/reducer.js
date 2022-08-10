import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    // console.log("action type clear cart");
    return { ...state, cart: [] };
  }
  if (action.type === GET_TOTALS) {
    console.log("action type GET_TOTALS");
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        cartTotal.amount += cartItem.amount;
        cartTotal.total = cartTotal.total + amount * price;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === INCREASE) {
    // console.log("increased the amount");
    let tempCart = [];
    const { id } = action.payload;
    tempCart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    // let tot = 0;
    // state.cart.map(({ amount, price }) => {
    //   tot = tot + amount * price;
    // });
    return { ...state, cart: tempCart };
  }
  if (action.type === DECREASE) {
    const { id, amount } = action.payload;
    console.log("decrease the amount", id);
    let tempCart = [];
    if (amount === 1) {
      tempCart = state.cart.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
    return { ...state, cart: tempCart };
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
