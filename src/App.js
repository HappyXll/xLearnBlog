import React from 'react';
import routers from './Routes';
import {
  BrowserRouter ,
  Switch,
  Router,
  Route
} from "react-router-dom";

function App(props) {
  console.log("111");
  return (
    <div>
      this.is App
      
  <BrowserRouter>
          {routers.map((route,i)=> 
           <Route  path={route.path} component={route.componentName} key={`${route.path} ${i} `}/>)
        }
      
  </BrowserRouter>
    </div>
  );
}

export default App;