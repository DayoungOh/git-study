import { css } from "@emotion/core";
import colors from "components/colors.scss";

export default {
  root: {
    position: "relative",
    display: "inline-block",
    height: 30,
    width: "100%"
  },
  input: css`
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    padding: 0 16px;
    border: solid 1px ${colors.grey300};
    background-color: ${colors.white};
    color: ${colors.black};

    &::placeholder {
      color: ${colors.grey200};
    }
  `,
  negative: {
    border: `solid 1px ${colors.negative}`
  },
  disabled: css`
    color: ${colors.grey200};
    border: solid 1px ${colors.grey200};
    background-color: ${colors.grey100};
  `,
  errorText: css`
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    color: ${colors.negative};
  `
};
