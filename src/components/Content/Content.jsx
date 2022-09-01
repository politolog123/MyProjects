import React from "react";
import My_posts from "../My_posts/My_posts";
import classes from "./Content.module.css";

const Content = () => {
    return(
        <div>
        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"></img>
        <div>ava + description</div>
        <My_posts />
      </div>
    
    )
}

export default Content;