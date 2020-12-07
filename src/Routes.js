import Blog from "./js/components/Blogs/Blog";
import Liabrary from "./js/components/Library/Library";
import Login from "./js/components/Login/Login";
let routers=[
  {
    path:"/Blog",
    componentName:Blog,
  },
  {
    path:"/Liabrary",
    componentName:Liabrary,
  },
  {
    path:"/login",
    componentName:Login,
  }

]
export  default  routers;