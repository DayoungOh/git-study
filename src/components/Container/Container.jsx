import { css as emotionCss, jsx } from "@emotion/core";
import PropTypes from "prop-types";

/** @component */
export default function Container(props) {
  const { component, css, children, ...inheritProps } = props;
  return jsx(
    component,
    {
      ...inheritProps,
      css: [
        emotionCss`
        width: 100%;
        max-width: 1024px;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
      `,
        css
      ]
    },
    children
  );
}

Container.proptTypes = {
  component: PropTypes.any,
  css: PropTypes.any
};

Container.defaultProps = {
  component: "div"
};
