import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function HomePage(props) {
  console.log("propsBlog", props);
  return (
    <div className="Blog-wrap">
      <div className="blog_box">
        <div className="hm-navbar ">HomePage</div>
        <section  className='header-links'>
          <div><Link to='homePage'>HomePage</Link></div>
        
        <div><Link to='login'>login</Link></div>
        <div> <Link to='liabrary'>Liabrary</Link></div>
       
      </section>
      </div>
     
      <section className="box-contents">
        <Login />
      </section>
    </div>
  );
}

export default HomePage;
