import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
