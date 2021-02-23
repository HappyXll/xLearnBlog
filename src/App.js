import * as React from 'react';
import routers from './Routes';
import {
  BrowserRouter ,
  Switch,
  Router,
  Route
} from "react-router-dom";

function App(props) {
  
  return (
    <div>
     
      
  <BrowserRouter>
          {routers.map((route,i)=> 
           <Route  path={route.path} component={route.componentName} key={`${route.path} ${i} `}/>)
        }
      
  </BrowserRouter>
    </div>
  );
}

export default App;