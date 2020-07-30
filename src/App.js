import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Photos from "./components/pages/Photos";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <div>
      <AppContextProvider>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Photos} />
          </Switch>
        </div>
      </AppContextProvider>
    </div>
  );
}

export default App;
