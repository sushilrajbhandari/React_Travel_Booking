import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import Bookings from "./Bookings";
import Hotels from "./Hotels";
import ListingApi from './Listing/ListingApi'

const Routing = () => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/hotels" component={Hotels}></Route>      
      <Route path="/bookings" component={Bookings}></Route>
      <Route path="/list/:id" component={ListingApi}></Route>
    </>
  );
};

export default Routing;
