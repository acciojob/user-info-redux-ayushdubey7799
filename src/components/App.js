
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import User from "./User";

const App = () => {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  )
}

export default App
