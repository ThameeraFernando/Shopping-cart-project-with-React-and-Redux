import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//store -stores data,think of state.(in the store  we store our data.)
//reducer - function that used to update store.

import { createStore } from "redux";
//initial store
const initialStore = {
  count: 10,
};
//reducer
//reducer -function that used to update store
//two arguments-state,action
//state -old state/state before update
//action-what happened/what update
//return updated old value
const reducer = (state, action) => {
  console.log("Hello world");
  console.log({ state, action });
  return state;
};
//create a store
const store = createStore(reducer, initialStore);
//get the state from the store
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
