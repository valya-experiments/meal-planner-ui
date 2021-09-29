import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink,
} from "react-router-dom";

import { Error404View } from "./views/404";
import { MealView } from "./views/Meal";
import "./tailwind.imports.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/meal">Meal</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact strict path="/meal">
            <MealView />
          </Route>

          <Route path="*">
            <Error404View />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
