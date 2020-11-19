import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import Bookings from "./Bookings";
import Hotels from "./Hotels";

const Routing = () => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/hotels" component={Hotels}></Route>
      <Route path="/bookings" component={Bookings}></Route>
    </>
  );
};

export default Routing;
