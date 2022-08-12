import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff

//store -stores data,think of state.(in the store  we store our data.)
//reducer - function that used to update store.

//actions
import { DECREASE, INCREASE, CLEAR_CART } from "./actions";
//reducer
import reducer from "./reducer";
import { createStore } from "redux";
//react-redux library
//react-redux -provider-wraps app,
// connect -used in components to access the store
import { Provider } from "react-redux";

//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
//reducer
//reducer -function that used to update store
//two arguments-state,action
//state -old state/state before update
//action-what happened/what update
//return updated old value

//dispatch actions
//dispatch method send actions to the store
//actions (objects) - MUST HAVE TYPE PROPERTY -What kind of action
//DON"T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

//create a store
// const store = createStore(reducer,initialStore);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//get the state from the store
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: "CHANGE_NAME" });
// store.dispatch({ type: "RESET" });
// store.dispatch({ type: "INCREASE" });
// store.dispatch({ type: "INCREASE" });
// store.dispatch({ type: "INCREASE" });

// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      {/* <Navbar cart={store.getState()} /> */}
      <Navbar />
      {/* <CartContainer cart={cartItems} /> */}
      <CartContainer />
    </Provider>
  );
}

export default App;
