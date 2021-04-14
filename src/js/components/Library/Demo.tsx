import * as React from 'react'

const Demo=()=>{
  
  const [number,setNumber] = React.useState<Boolean | Number>(false);
  const ref1 = React.useRef<HTMLElement>(null);
  React.useEffect(()=>{
    console.log(777777);
  },[])
  const click =()=>{
    if(typeof number === "number"){
      setNumber( number+1);
    }
     
  }
  return <><button onClick={click}></button>
  <div>{number}</div>
  </>
}
export default Demo;