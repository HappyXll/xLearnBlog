import React from "react";
import "./blogs.css";

import { Breadcrumb, BreadcrumbItem } from "shards-react";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function Blog(props) {
  console.log("props", props);
  return (
    <div className="Blog-wrap">
      <div className="blog_box">
        <div className="top-box">
          <Button> ABOUT ME</Button>
          <Button theme="light">FrentEnd Lists </Button>
          <Button theme="success" onClick={()=>{props.history.push("/login")}}>Login</Button>
          <Button theme="info">EDIT</Button>
          {/* <Button theme="warning">Warning</Button>
        <Button theme="danger">Danger</Button>
        <Button theme="light">Light</Button>
        <Button theme="dark">Dark</Button> */}
        </div>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <section className='box-contents'></section>
    </div>
  );
  
}

export default Blog;
