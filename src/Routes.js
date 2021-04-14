import Liabrary from "./js/components/Library/Library";
import Loadable from "react-loadable";
import Loading from "../src/js/components/Loading";
import Login from './Login';

const Blog = Loadable({
  loader: () => import("./js/components/Blogs/Blog"),
  loading: Loading,
});

// const Login = Loadable({
//   loader: () => import("./js/components/Login/Login"),
//   loading: Loading,
// });
let routers = [
  {
    path: "/Blog",
    componentName: Blog,
  },
  {
    path: "/Liabrary",
    componentName: Liabrary,
  },
  {
    path:"/login",
    componentName:Login,
  }
];
export default routers;
