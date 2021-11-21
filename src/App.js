import * as React from "react";
import routers from "./Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store ,{persistor}from "./Store/Store";
import { PersistGate } from "redux-persist/lib/integration/react";

function App(props) {
  console.log("1111 add test");
  return (
    
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              {routers.map((route, i) => (
                <Route
                  path={route.path}
                  component={route.componentName}
                  key={`${route.path} ${i} `}
                  {...props}
                />
              ))}
            </Switch>
          </BrowserRouter>
          </PersistGate >
        </Provider>
 
    
  );
}

export default App;
