import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = () =>{
    return(
        <nav className={classes.app_nav}>
        <div className={classes.item}>
          <NavLink to="/Profile" >Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/Dialogs">Dialogs</NavLink>
        </div>
        <div className={classes.item}>
          <a>News</a>
        </div>
        <div className={classes.item}>
          <a>Music</a>
        </div>
        <div className={classes.item}>
          <a>Settings</a>
        </div>
      </nav>
    )
}
export default Navigation;