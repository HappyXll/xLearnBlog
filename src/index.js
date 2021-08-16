import App from "./App";
import * as React from "react";
import ReactDOM from "react-dom";
import '../src/Tw/tailwind.css';

const wrapper = (Component) => {
   import('./User').then((module)=>{console.log(11,module)})
  if (typeof window !== 'undefined') {
    const root = document.getElementById("container");
    ReactDOM.render(<Component />, root)
}
 
};

function index(props) {
  console.log("index",Array);
  return (
    <div>
      {/* this is hhhh */}
      <App />
    </div>
  );
}

export default wrapper(index);
