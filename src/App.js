import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import UiLoading from "./features/UiLoading";
import ROUTER from "./router";

export default function App() {
  const [loading, setLoading] = useState("");
  const uiLoading = useSelector((state) => state.uiLoading.loading);

  useEffect(() => {
    const setLoadingIndex  = () =>{ 
      setLoading(uiLoading);
    }
    setLoadingIndex();
  });

  return (
    <div>
      <Header></Header>
      { loading && <UiLoading></UiLoading>}
      <Router>
        <Switch>
          {ROUTER.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              ></Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}
