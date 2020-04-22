/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

import colors from "components/colors.scss";
import Typography from "components/Typography";

const BUTTON_SIZES = ["lg", "md", "sm", "xs"];
const BUTTON_VARIANTS = [
  "default",
  "primary",
  "secondary",
  "ghost",
  "link-black",
  "link-blue"
];

const cssButton = css`
  padding: 0;
  background-color: ${colors.white};
  border-color: ${colors.white};
  border-width: 1px;
  border-style: solid;

  line-height: 1;

  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  transition-property: color, background-color, border-color, opacity;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  cursor: pointer;
`;

const buttonSizes = {
  lg: css`
    height: 48px;
    min-width: 220px;
    border-radius: 2px;
  `,
  md: css`
    height: 40px;
    min-width: 120px;
    border-radius: 1px;
  `,
  sm: css`
    height: 32px;
    min-width: 120px;
    border-radius: 2px;
  `,
  xs: css`
    height: 24px;
    min-width: 72px;
    border-radius: 1px;
  `
};

const cssFullWidth = css`
  max-width: unset;
  width: 100%;
`;

const buttonVariants = {
  default: css`
    color: ${colors.black};
    background-color: ${colors.grey200};
    border: 1px solid ${colors.grey200};

    &:hover {
      background-color: ${colors.grey300};
      border-color: ${colors.grey300};
    }

    &:disabled {
      color: ${colors.grey200};
      background-color: ${colors.grey100};
      border-color: ${colors.grey100};
    }
  `,
  primary: css`
    color: ${colors.white};
    background-color: ${colors.blue700};
    border: 1px solid ${colors.blue700};

    &:hover {
      background-color: ${colors.blue900};
      border-color: ${colors.blue900};
    }

    &:disabled {
      color: ${colors.blue100};
      background-color: #d8edff;
      border-color: #d8edff;
    }
  `,
  secondary: css`
    color: ${colors.blue700};
    background-color: ${colors.blue100};
    border-color: ${colors.blue100};

    &:hover {
      background-color: ${colors.blue200};
      border-color: ${colors.blue200};
    }

    &:disabled {
      color: ${colors.grey200};
      background-color: ${colors.grey100};
      border-color: ${colors.grey100};
    }
  `,
  ghost: css`
    color: ${colors.blue700};
    background-color: transparent;
    border: solid 1px ${colors.blue700};

    &:hover {
      background-color: ${colors.blue100};
    }

    &:disabled {
      color: ${colors.blue100};
      border-radius: 2px;
      border: solid 1px ${colors.blue100};
    }
  `,
  "link-blue": css`
    color: ${colors.blue700};

    &:hover {
      text-decoration: underline;
    }

    &:disabled {
      color: ${colors.grey200};
    }
  `,
  "link-black": css`
    color: ${colors.grey600};

    &:hover {
      text-decoration: underline;
    }

    &:disabled {
      color: ${colors.grey200};
    }
  `
};

const Button = React.forwardRef(
  ({ size, variant, children, fullWidth, textProps = {}, ...props }, ref) => {
    return (
      <button
        ref={ref}
        css={[
          cssButton,
          buttonVariants[variant],
          buttonSizes[size],
          fullWidth && cssFullWidth
        ]}
        {...props}
      >
        <Typography variant={size} color="inherit" btn {...textProps}>
          {children}
        </Typography>
      </button>
    );
  }
);

Button.propTypes = {
  size: PropTypes.oneOf(BUTTON_SIZES),
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  fullWidth: PropTypes.bool
};

export default Button;
