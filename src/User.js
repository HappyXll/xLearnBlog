import * as React from "react";
import { connect } from "react-redux";
import loginAction from './Store/Action';
const UserInfo =(props)=>{
  
  return<div>33333

    <button onClick={()=>{ console.log("111pp",props);props.loginAction&&props.loginAction();}}>点啊</button>
<div>this is userInfo {props.UserInfo.name}</div>
  </div> 
}
const mapDispatch = {
  loginAction
};
const mapState = state => {
  return {
    UserInfo: state.userInfo
  };
};

export default connect(mapState,mapDispatch)(UserInfo);