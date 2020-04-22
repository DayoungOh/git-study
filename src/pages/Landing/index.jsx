/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";

import LoginBox from "organisms/LoginBox";

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <div css={css`text-align: center;`}>
                    <LoginBox css={css`width:200px;`}/>
                </div>
            </div>
        )
    }
}