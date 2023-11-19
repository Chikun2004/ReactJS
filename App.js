/*
Parcel Do-
  HMR-Hot Module Reloading
  File Watcher Algorithm
  Bundling
  Minify
  Cleaning our code
  Dev abd Production Build
  Super Fast build algorithm
  Image Optimization
  Caching while development
  Compression
  Compatable with OlderVersion of Browser
  HTTPS on dev
  port Number
  Consistent Hashing Algorithm
  Zero Config


  Transitive Dependencies
*/



import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 for Parcel"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root

//async defer
root.render(container);