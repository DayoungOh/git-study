/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'

import AppBar from "organisms/AppBar";
import AppBarRoute from "routes/AppBarRoute";
import ContainerHeader from "organisms/ContainerHeader";

export default class MainPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabSelectedMenu: 0,
            selectedMenu: '',
            sideBarMenu: ''
        };
        this.handleChangeSideBarMenu = this.handleChangeSideBarMenu.bind(this);
    }

    handleChangeSideBarMenu(name) {
        this.setState({
            sideBarMenu: name
        })
    }

    render() {
        const state = this.state;
        return (
            <div>
                <Router>
                    <AppBar handleChangeSideBarMenu={this.handleChangeSideBarMenu}/>
                    <div css={css`margin-left: 180px; height: 100%; width: 100%`}>
                        <ContainerHeader title={state.sideBarMenu}></ContainerHeader>
                        <AppBarRoute/>
                    </div>
                </Router>
            </div>
        )
    }
}