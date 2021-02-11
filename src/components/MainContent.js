
import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { Customers } from '../pages/Customers/index';
import { Sales } from "./Sales";

export const MainContent = () => {
    return (
        <Switch>
          <Route path="/products">
            <Customers />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
        </Switch>
    )
}
