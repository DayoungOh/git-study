/** @jsx jsx */
import {jsx} from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

import InputContext from "./InputContext";
import styles from "./styles";

import FormContext from "components/FormContext";
import { variants } from "components/Typography/Typography";

export class InputInner extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        defaultValue: PropTypes.any,
        value: PropTypes.any,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool,
        error: PropTypes.string,
        disabled: PropTypes.bool,
        /** onChange의 2번째 인자로 event 객체를 내보낼지의 여부 */
        dispatchEvent: PropTypes.bool,
        /** type='number' 계열일때 사용하는 prop */
        maxLength: PropTypes.any,
        min: PropTypes.number,
        max: PropTypes.number
    };

    static defaultProps = {
        type: "text"
    };

    onChange = e => {
        const {onChange, dispatchEvent} = this.props;
        if (!onChange) return;

        let {value} = e.target;

        if (dispatchEvent) {
            onChange(value, e);
        } else {
            onChange(value);
        }
    };

    onBlur = e => {
        const {onBlur} = this.props;
        if (onBlur) {
            onBlur(e);
        }
    };

    onFocus = e => {
        const {onFocus} = this.props;
        if (onFocus) {
            onFocus(e);
        }
    };

    render() {
        const {
            error,
            children,
            disabled,
            onChange,
            defaultValue,
            maxLength,
            value,
            placeholder,
            readOnly,
            type,
            innerCss,
            onFocus,
            onBlur,
            ...props
        } = this.props;

        const context = {error, disabled, value};
        let type_ = type;
        if (typeof type === "string" && type.startsWith("number")) {
            type_ = "number";
        }


        return (
            <div css={styles.root} {...props}>
                <input
                    css={[
                        styles.input,
                        variants.md,
                        error && styles.negative,
                        disabled && styles.disabled,
                    ]}
                    defaultValue={defaultValue}
                    value={value}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    type={type_}
                    disabled={disabled}
                    maxLength={maxLength}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onKeyDown={this.onKeyDown}
                    ref={this.input}
                />
                <InputContext.Provider value={context}>
                    {children}
                </InputContext.Provider>
            </div>
        );
    }
}

/** @component */
export default function Input(props) {
    return (
        <FormContext.Consumer>
            {context => <InputInner {...context} {...props} />}
        </FormContext.Consumer>
    );
}
