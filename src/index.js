import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./miniproject2/redux_modules/RootReducer";

//1. 스토어 등록(state)
const store = configureStore({
  reducer: rootReducer,
});

//root DOM은 index.html이랑 id값이 같아야함 (V-DOM 구성)
const root = ReactDOM.createRoot(document.getElementById("roots"));

//V-DOM 하위 DOM(컴포넌트)들을 구성하는거에요
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
