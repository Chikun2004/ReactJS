import React from "react";
import  ReactDOM  from "react-dom/client";

//Default Import
import Header from "./components/Header";

//Named Import
import {Title} from "./components/Header";

import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
 /*
        header
          -Logo
          -List Items(Right side)
          -Cart
        Body
          -Search bar
          -ResturantList
          -ResturantCard
             -Image
             -Name
             -Rating
             -Cusins
        footer
        -links
        -copyrights
        
     */


//Config Driven UI
 
// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);