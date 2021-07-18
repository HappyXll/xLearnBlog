import * as React from "react";
type GreetingProps = {
  name: string;
  // age:number;
  // address:string ;
};


const Demo1: React.FC<GreetingProps> = ({ name = "liili" }) => {
  let someValue: any = "this is a string";
  let strLength: number = (someValue as string).length;
  return <h2>hello and </h2>;
};



const Demo = () => {
  const [number, setNumber] = React.useState<Boolean | Number>(false);
  const ref1 = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    console.log(777777);
  }, []);
  const click = () => {
    if (typeof number === "number") {
      setNumber(number + 1);
    }
  };
  return (
    <>
      <button onClick={click}></button>
      <div>{number}</div>
      <Demo1 name="Ming" />
    </>
  );
};

export default Demo;
