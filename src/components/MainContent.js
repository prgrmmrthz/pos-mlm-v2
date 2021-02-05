
import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { Products } from "./Products/index";
import { Sales } from "./Sales";

export const MainContent = () => {
    return (
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
        </Switch>
    )
}
