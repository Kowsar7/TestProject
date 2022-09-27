import React from "react";

import classes from './PaginationItem.module.css'

const paginationItem = (props) => {
    return(
        <div className={classes.PaginationItem}>
            <li key={props.id}><h3>{props.title}</h3></li>
            <p>{props.body}</p>
            <label>userId: {props.userId}</label>
            <div className={classes.Line}></div>
        </div>
    )
}

export default paginationItem