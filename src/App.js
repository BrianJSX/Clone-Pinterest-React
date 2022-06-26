import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UiLoading from "./features/UiLoading";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import "./scss/app.scss";
import MainLayout from "./layout/MainLayout";
import RegisterPage from "./pages/RegisterPage";


export default function App() {
  const [loading, setLoading] = useState("");
  const uiLoading = useSelector((state) => state.uiLoading.loading);

  useEffect(() => {
    const setLoadingIndex = () => {
      setLoading(uiLoading);
    };
    setLoadingIndex();
  });

  return (
    <div style={{ width: 100 + "%", height: 100 + "%" }}>
      <Router>
        {loading && <UiLoading></UiLoading>}
        <Switch>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <MainLayout>
            <Route path="/" exact>
              <Home></Home>
            </Route>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}
