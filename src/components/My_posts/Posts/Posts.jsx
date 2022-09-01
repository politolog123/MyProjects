import React from "react";
import classes from "./Posts.module.css";

const Posts = (props) => {
    return(
      <div>
        <div className={classes.item}>
          <img src="https://n1s1.hsmedia.ru/85/64/3f/85643f2e03be52b0bc00cb0f60b12f31/728x546_1_76d11b54618da2bff71c051801a697db@1441x1081_0xac120003_18866572441655464119.jpeg" alt="" />
          <span className={classes.item1}>{props.message}</span>
          <div>
          <button className={classes.item2}>Like</button>
          <span className={classes.item1}>{props.likesCount}</span>
          </div>
        </div>
    </div>
    )
}

export default Posts;