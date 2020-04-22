/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";

import {Link} from "react-router-dom";
import MuiAppBar from "@material-ui/core/AppBar"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SideBar from "organisms/SideBar"

import colors from "components/colors.scss"
import menuData from "routes/menuData"


const appBarCss = css`
width: 100%; 
height: 48px;`

const appbarHeaderCss = css`
box-shadow: none !important;
background-color: ${colors.black3} !important;
border-bottom: 1px solid ${colors.grey300} !important;
padding-left: 180px;
color: ${colors.white} !important;
`

const tabCss = css`
min-width: 100px !important;
`

export default class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabSelectedMenu: 0,
            selectedMenu: '회원관리'
        };
        this.changeMenu = this.changeMenu.bind(this);
    }

    changeMenu(e, menuName, menuIdx) {
        this.setState({
            selectedMenu: menuName,
            tabSelectedMenu: menuIdx,
        })
        this.props.handleChangeSideBarMenu('')
    }

    render() {
        const state = this.state;
        return (<>
                <div css={appBarCss}>
                    <MuiAppBar position='fixed' color='transparent' css={appbarHeaderCss}>
                        <Tabs value={state.tabSelectedMenu}>
                            {menuData.map((item, idx) => <Tab
                                key={item.path}
                                label={item.name}
                                css={tabCss}
                                to={item.path}
                                onClick={(e) => {this.changeMenu(e, item.name, idx)}}
                                component={Link}/>
                            )}
                        </Tabs>
                    </MuiAppBar>
                </div>
                <SideBar selectedMenu={state.selectedMenu} handleChangeSideBarMenu={this.props.handleChangeSideBarMenu}/>
            </>
        )
    }
}