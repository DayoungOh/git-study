/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";
import {Link} from "react-router-dom";

import Input from "components/Input"
import Typography from "components/Typography";
import FormLabel from "components/FormLabel";
import Button from "components/Button"
import color from "components/colors.scss"

export default class LoginBox extends React.Component {
    render() {
        return <>
            <div css={css`
            width: 400px;
            display: inline-block;
            magin-top: 50px;
            `}>
                <div css={css`text-align: left; margin-top: 20px; margin-bottom: 30px;`}>
                    <Typography variant='title2' component='span' color={color.blue700}>
                        Login
                    </Typography>
                </div>
                <div css={css`width: 70%; float:left`}>
                    <div>
                        <div css={css`width: 30%; float:left`}>
                            <FormLabel>아이디</FormLabel>
                        </div>
                        <div css={css`width: 70%; float:left`}>
                            <Input css={css`margin-bottom: 10px;`}/>
                        </div>
                    </div>
                    <div>
                        <div css={css`width: 30%; float:left`}>
                            <FormLabel>패스워드</FormLabel>
                        </div>
                        <div css={css`width: 70%; float:left`}>
                            <Input type='password' css={css`margin-bottom: 10px;`}/>
                        </div>
                    </div>
                </div>
                <div css={css`width: 30%; height: 80px; float:left;`}>
                    <Link to='/main'>
                    <Button css={css`height: 87%; min-width: 80px`} size='md' fullWidth={false} variant='primary'>Login</Button>
                    </Link>
                </div>
            </div>
        </>
    }

}