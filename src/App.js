import * as React from "react";
import routers from "./Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from './Store/Store';
//import Action from './Store/Action';


function App(props) {
  const onClick =async ()=>{
    console.log("store",Store);
    //Store.dispatch(Action)
    console.log(111,Store.getState());
  }
  return (
    <>
    <div>
    <Provider store ={Store}>
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
    <button onClick={onClick}>点点点点</button>
          <span>{Store.getState().userInfo.email}</span>
    </>
  );
}

export default App;
