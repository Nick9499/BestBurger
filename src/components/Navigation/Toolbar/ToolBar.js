import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle'
import classes from './toolbar.css'

const ToolBar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.DrawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo height="80%" />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default ToolBar
