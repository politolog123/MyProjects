import React from "react";
import classes from "./My_posts.module.css";
import Posts from "./Posts/Posts";
import Text_area from "./Text_area/Text_area";

const My_posts = () => {
    return(
      <div>
        <div>my pos</div>
        <div className="posts">new post</div>
        <Text_area></Text_area>
        <Posts message ="NIkita" likesCount='12'/>
        <Posts message ="Dima" likesCount='0'/>
    </div>
    )
}

export default My_posts;