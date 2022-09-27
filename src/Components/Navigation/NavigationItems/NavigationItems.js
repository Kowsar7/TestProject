import React from "react";

import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/posts'>Posts</NavigationItem>
            <NavigationItem link='/chart'>Chart</NavigationItem>
            <NavigationItem link='/questions'>Questions</NavigationItem>
        </ul>
    )
}

export default navigationItems