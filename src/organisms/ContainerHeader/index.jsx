/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";

import Grid from "components/Grid"
import Typography from "components/Typography"

import colors from "components/colors.scss"

const headerCss = css`padding: 10px;
border-bottom: 1px solid ${colors.grey300}`

export default class ContainerHeader extends React.Component {

    render() {
        const props = this.props;
        return (<>
                <Grid container>
                    <Grid item xs={12}>
                        <div css={headerCss}>
                            <Typography variant='title1'>{props.title}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }
}