import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
const Dialogs = (props) =>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.item + ' ' + classes.active}>
                <NavLink to="/dialogs/1">Nikita</NavLink>
                </div>
                <div className={classes.item}>
                <NavLink to="/dialogs/2">Dima</NavLink>
                </div>
                <div className={classes.item}>
                <NavLink to="/dialogs/3">Nadya</NavLink>
                </div>
                <div className={classes.item}>
                <NavLink to="/dialogs/4">Valera</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                Hello
                </div>
                <div className={classes.message}>
                    how are you
                </div>
                <div className={classes.message}>
                    im fine
                </div>
                <div className={classes.message}>
                lofdfsELLO
                </div>
            </div>
        </div>
    )
}
export default Dialogs;