 
const  logger = ({getState})=>(next)=>(action)=>{
    console.log("action",action.type);
    const preveState =getState();
    console.log("preVState",preveState);
    const returnValue =next(action);
    const nextState =getState()
    console.log("next State",returnValue,nextState);
    
}


export default logger;


