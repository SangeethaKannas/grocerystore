import React from "react";
import { GroceryStoreDataStore } from "./data/GroceryStoreDataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect }
    from "react-router-dom";
import { ShopConnector } from "./components/shop/ShopConnector";
import { Admin } from "./admin/Admin";

function App() {
  return (
  <Provider store={ GroceryStoreDataStore }>
    <Router>
        <Switch>
            <Route path="/shop" component={ ShopConnector } />
            <Route path="/admin" component={ Admin } />
            <Redirect to="/shop" />
        </Switch>
    </Router>
  </Provider>
  );
}

export default App;
