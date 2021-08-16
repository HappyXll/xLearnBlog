//import React from "react";
//import Liabrary from "./js/components/Library/Library";
import Loadable from "react-loadable";
import Loading from "../src/js/components/Loading";
import Login from './js/components/Login/Login';
// import Article from '../src/js/components/Articles/Article';
import NewReactLoadable from './NewReactLoadable';
const HomePage = Loadable({
  loader: () => import("./js/components/HomePage/HomePage"),
  loading: Loading,
});

const Article =NewReactLoadable({
  loader:()=>import("../src/js/components/Articles/Article"),
  loading:Loading,
})

const Liabrary=NewReactLoadable({
  loader:()=>import( "./js/components/Library/Library"),
  loading:Loading,
})

let routers = [
  {
    path:"/login",
    componentName:Login,
  },
  //
  {
    path: "/homePage",
    componentName: HomePage,
    
  },
  {
    path: "/liabrary",
    componentName: Liabrary,
  },
  {
    path: "/Article",
    componentName: Article,
  },
  {
   
    componentName: HomePage,
  },
   
   
];
export default routers;
