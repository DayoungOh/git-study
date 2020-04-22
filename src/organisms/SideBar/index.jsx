/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";

import {Link} from "react-router-dom";
import Typography from "components/Typography"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import colors from "components/colors.scss"
import menuData from "routes/menuData"

const sideBarCss = css`
  height: 100%;
  width: 180px;
  position: fixed;
  top: 0;
  left: 0;
  background-color:${colors.black3};
  border-right: 1px solid ${colors.grey300};
  overflow-x: hidden;
  padding-top: 70px;
`;

const subMenu = menuData.reduce((obj, item) => {
    obj[item.name] = item.submenu;
    return obj;
}, {});

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: false,
        };
        this.handleListItemClick = this.handleListItemClick.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedMenu !== this.props.selectedMenu) {
            this.setState({
                selectedIndex: 0
            });
        }
    }

    handleListItemClick(e, index, name) {
        this.setState({
            selectedIndex: index
        });
        this.props.handleChangeSideBarMenu(name);
    };

    render() {
        const props = this.props;
        const state = this.state;
        return (<>
                <div css={sideBarCss} className='CustomSideBar'>
                    <List>
                        {subMenu[props.selectedMenu].map((item, idx) => <ListItem
                            key={idx}
                            button
                            selected={state.selectedIndex === idx}
                            onClick={e => this.handleListItemClick(e, idx, item.name)}
                        >
                            <Link
                                to={item.path}
                                css={css`text-decoration: none`}>
                                <Typography
                                    variant='h4'
                                    color={colors.white}>
                                    {item.name}
                                </Typography>
                            </Link>
                        </ListItem>)}
                    </List>
                </div>
            </>
        )
    }
}