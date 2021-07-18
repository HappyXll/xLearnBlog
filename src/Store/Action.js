import axios from 'axios';
 const  loginAction =()=> async (dispatch)=>{
   
   const res=  await axios.get(`https://jsonplaceholder.typicode.com/users`)
   
  dispatch({type:"GetUserSuccess",data:res.data[0]});
 
 
}


export default loginAction;