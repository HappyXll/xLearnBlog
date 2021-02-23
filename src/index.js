import App from "./App";
import * as React from 'react';
import ReactDOM from 'react-dom';


const wrapper=(Component)=>{
  const root=document.getElementById("container");
return ReactDOM.render(<Component />, root)
}
function index(props) {
  console.log("index");
  return (
    <div>
      {/* this is hhhh */}
     < App/>
    </div>
  );
}

export default wrapper(index);