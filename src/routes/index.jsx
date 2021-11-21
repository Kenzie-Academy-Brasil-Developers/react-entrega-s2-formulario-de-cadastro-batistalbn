import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Register from "../pages/Register";
import User from "../pages/User";

const Routes = () => {
  const [user, setUser] = useState([]);
  console.log(user);
  return (
    <Switch>
      <Route exact path="/">
        <Register setUser={setUser} />
      </Route>
      <Route exact pacth="/user">
        <User user={user} />
      </Route>
    </Switch>
  );
};

export default Routes;
