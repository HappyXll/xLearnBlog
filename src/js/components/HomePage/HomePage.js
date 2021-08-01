import React, { useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import imgOO from './111.jpg';

function HomePage(props) {
  console.log(1111,props)
  const {isLogin}=props;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="Blog-wrap">
      <div className="blog_box">
        <div className="hm-navbar m-1">HomePage</div>
        <section className="header-links">
          <div>
            <Link to="homePage">HomePage</Link>
          </div>

          <div>
            {" "}
            <Link to="liabrary">Liabrary</Link>
          </div>
          <div>
            {" "}
            <Link to="Article">Article</Link>
          </div>
        </section>
      </div>

      <section className="box-contents">
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <Login />
        </Modal>
        {!isLogin?<Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          onClick={() => {
            setOpen(true);
          }}
        >
          Login
        </Button>:<div>LoginSuccess:{props?.authname}</div>}
        <img src={imgOO}/>
      </section>
    </div>
  );
}
const mapState = state => {
  return {
    isLogin: state.isLogin,
    authname:state?.userInfo?.name?state?.userInfo?.name:"LingLing"
  };
};
export default connect(mapState,null)(HomePage);HomePage;
