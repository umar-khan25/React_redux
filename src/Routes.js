import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import Home from './home'
import About from './about'
import Shop from './shop'
import Login from './login'
import Register from "./register";
const Routes=()=>{
    return(
<Switch>
     <Route path="/" exact={true} component={Login}  />
     <Route path="/home" exact={true} component={Home} />
     <Route path="/about" exact={true} component={About} />
     <Route path="/shop" exact={true} component={Shop} />
     <Route path="/register" exact={true} component={Register} />
</Switch>
    );
}
export default Routes;