import React, { Component } from 'react'
import Auxx from '../Auxx/Auxx'
import SideBar from '../../components/Navigation/Sidebar/SideBar'
import ToolBar from '../../components/Navigation/Toolbar/ToolBar'
import classes from './Layout.css'

class Layout extends Component {
    state = {
        showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    render() {
        return (
            <Auxx>
                <ToolBar DrawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideBar
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Auxx>
        )
    }
}

export default Layout
