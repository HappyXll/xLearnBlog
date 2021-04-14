import React,{useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import api from 'api';


export default function Login() {
  const [loginInfo,setLoginInfo]=useState()
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
  return (
    <div className=" m-auto mt-6 w-56">
      Login
      <div className="mb-4 mt-3">
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          onChange={typeUserName}
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
        />
      </div>
      <div className=" mt-3">
      <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          onChange={typeUserName}
        />
      </div>
      <div>
        <Button
          variant="contained"
          className="mt-6"
          onClick={() => {
            console.log(111);
          }}
        >
          submit
        </Button>
      </div>
    </div>
  );
}
