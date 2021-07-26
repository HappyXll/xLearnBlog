 export const initstate = {
  userInfo: {},
  isLogin: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "GetUserSuccess":
     return {
        
      isLogin: true,
        userInfo: action.data,
      };
    default:
      return state;
  }
};
export default authReducer;
