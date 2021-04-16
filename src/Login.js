import React,{useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { Button, } from "@material-ui/core";
import api from 'api';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));
export default function Login() {
  
  const classes = useStyles();
  const [loginInfo,setLoginInfo]=useState();
  const [index,setIndex]=useState(0);
  const [value, setValue] = React.useState(1);
  
  const handleChange = (event, newValue) => {
    console.log("hahah",event, newValue);
    setIndex(newValue);
  };
  useEffect(()=>{
    api.post("/login",{
      "name": "BiaoChenXuYing",
      "password": "888888",
      "email": "admin@qq.com"
    }).then((response)=>{
     console.log("ressss",response.data.data);
    })
   
  },[])
  const typeUserName = (username) => {
    console.log(username.target.value);
  };
  const typePassWord = (passWard) => {
    console.log(passWard.target.value);
  };
  const Login =()=>{
    return (<form className={classes.root}  noValidate autoComplete="off">
    <h1 className=" font-size">Login  </h1>
      <div className="mb-4 mt-3">
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          margin="normal"
          onChange={typeUserName}
          
          style={{width:"100%"}}
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={typePassWord}
         
          style={{width:"100%"}}
        />
      </div>
      <div className=" mt-3">
      <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          onChange={typeUserName}
     
          style={{width:"100%"}}
        />
      </div>
      <div>
        <Button
          variant="contained"
          className="mt-6 mb-8"
          onClick={() => {
            console.log(111);
          }}
        >
          submit
        </Button>
      </div>
      </form>)
  }
  const Register =()=>{
    return (<form className={classes.root}  noValidate autoComplete="off">
      <h1>Rigster </h1>
      <div className="mb-4 mt-3">
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          onChange={typeUserName}
          style={{width:"100%"}}
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={typePassWord}
          style={{width:"100%"}}
        />
      </div>
      <div className=" mt-3">
      <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          onChange={typeUserName}
          style={{width:"100%"}}
        />
      </div>
      <div>
        <Button
          variant="contained"
          className="mt-6 mb-6"
          onClick={() => {
            console.log(111);
          }}
        >
          Register
        </Button>
      </div>
      </form>)
  }
  return (
    <div className=" m-auto mt-6  ">
  
      <div style={{width:"700px",margin:"auto"}}>
      <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="fullWidth"
        aria-label="disabled tabs example"
      >
        <Tab label="LOGIN" />
        <Tab label="Register" />
      </Tabs>
      
    </Paper>
    {index===0&&<Login/>}
      {index===1&&<Register/>}
      </div>
      
    </div>
  );
}
