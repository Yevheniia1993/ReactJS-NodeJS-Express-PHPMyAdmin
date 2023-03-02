import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export default connect(
  (state) => ({
    testStore: state,
  }),
  (dispatch) => ({})
)(App);
function playlist(state = "", action) {
  switch (action.type) {
    case "Login":
      state = action.data;
      console.log("Enter Login");
      return [...state];
    case "Exit":
      state = "";
      console.log(state);

      return state;
    default:
      return state;
  }
}
export const store = createStore(playlist);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App mystore={store} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
