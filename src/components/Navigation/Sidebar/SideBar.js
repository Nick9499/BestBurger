import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './sidebar.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Aux from '../../../hoc/Auxx/Auxx'
const SideBar = (props) => {
    let attachedClasses = [classes.SideBar, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideBar, classes.Open]
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideBar
