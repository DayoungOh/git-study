/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Container from "components/Container"


export default class Users extends React.Component {
    render() {
        const tableStyle = {
            width: '100%',
            border: '1px solid #eee',
            backgroundColor: '#27594F'
        }
        return (<>
                <div>
                   <TableRow style={tableStyle}>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                   </TableRow>
                </div>
            </>
        )
    }
}