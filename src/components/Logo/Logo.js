import React from 'react'
import burgerLogo from '../../assets/Image/burger-logo.png'
import classes from './logo.css'
const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{ height: props.height }}>
            <img src={burgerLogo} alt="BBurger" />
        </div>
    )
}

export default Logo
