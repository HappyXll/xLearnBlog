import React, { useState ,useEffect} from "react";
const NewReactLoadable = (options) =>(props)=> {
  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }
  const {loader,loading}=options;
  function Loadable(props) {
    
    const [state, setState] = useState({ loading: true, loader: null });
    const init =async () => {
     const aa=await loader();
    
      setState({ loading: false,loader:aa.default, });
    };
    useEffect(()=>{
      init();
    },[])
    if (state.loading) {
      return (loading());
    } else if (state.loader) {
      return (state.loader());
    }
  }
 
  return (
  <Loadable  {...props}/>
  );
};
export default NewReactLoadable;

// // NewReactLoadable ({loadable:....,loading:....})
