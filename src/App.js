import * as React from "react";
import routers from "./Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";


function App(props) {
  return (
    <>
      <div>
        <Provider store={Store}>
          <BrowserRouter>
            <Switch>
              {routers.map((route, i) => (
                <Route
                  path={route.path}
                  component={route.componentName}
                  key={`${route.path} ${i} `}
                />
              ))}
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
