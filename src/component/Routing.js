import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import Bookings from "./booking/Bookings.js";
import ListingApi from './Listing/ListingApi'
import DetailApi from './details/DetailApi'
import PlaceBooking from './booking/placeBooking'

const Routing = () => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/viewbookings" component={Bookings}></Route>
      <Route path="/details/:id" component={DetailApi}></Route>
      <Route path="/list/:id" component={ListingApi}></Route>
      <Route path="/booking/:id" component={PlaceBooking}></Route>
    </>
  );
};

export default Routing;
