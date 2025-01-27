import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./containers/LogIn";
import Register from "./containers/Register";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./containers/Home";
import TopRated from "./containers/TopRated";
import UpComing from "./containers/UpComing";
import Detail from "./containers/Detail";
import Search from "./containers/Search";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />}></Route>
            <Route path="toprated" element={<TopRated />}></Route>
            <Route path="upcoming" element={<UpComing />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="detail/:id" element={<Detail />}></Route>
          </Route>
          <Route path="login" element={<LogIn></LogIn>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
