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
  Tree Shaking -Removing UnWanted Code


  Transitive Dependencies
*/



import React from "react";
import  ReactDOM  from "react-dom/client";

//React.createElement => Object=> HTML(DOM)
//JSX => React.createElement =>Object => HTML(DOM)
 
const title = () =>(
      <h1 id="title" key="h2">
         Namaste React
         </h1>
    );

// React Component
//-Functional --New
//Name of component starts with capital letter.-it is not mandatory

const data = api.getData();


const HeaderComponent = ()=> {
  return ( 
    <div>
        <title />
       <h1>Namaste React Functional Component</h1>
       <h2>This is a h2 Tage</h2>
  </div>
   );
};

//-Class Based Component - Old

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root

//async defer
root.render(<HeaderComponent/>);