import * as React from 'react';
function DemoReducer (){
 const initialState = {count :0};
 type ActionTypes = {type :"inCrement";payload :number}
 |{type :"decrement";payload:string};
 function reducer(state :typeof initialState,action :ActionTypes){
    switch(action.type){
      case "inCrement":
        return {count:state.count + action.payload};
      case "decrement":
        return {count:state.count - Number(action.payload)};
        default:
          throw new Error();
      } 


 }
 const [state,dispatch]=React.useReducer(reducer,initialState);
 return (<>
    count:{state.count}
    <button onClick={()=>{dispatch({type:"inCrement",payload:4})}}/>
 
 </>)
  
}
export default DemoReducer;
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}
function isFoo(arg:Foo|Bar){
return (arg as Foo).foo!=undefined
}
if(isFoo({foo:3,common:"uuu"})){
  console.log("8888")
}