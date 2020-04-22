import PropTypes from "prop-types";
import { css as emotionCss, jsx } from "@emotion/core";
import MuiTypography from "@material-ui/core/Typography";

import colorsPallete from "components/colors.scss";

export const fontFamily = "'Noto Sans KR', sans-serif";

export const variants = {
  hero: emotionCss`
    font-size: 36px;
    font-weight: 300;
  `,
  title1: emotionCss`
    font-size: 24px;
    font-weight: 300;
    line-height: 1.5;
  `,
  title2: emotionCss`
    font-size: 20px;
    font-weight: bold;
  `,
  h1: emotionCss`
    font-size: 18px;
    font-weight: bold;
  `,
  h2: emotionCss`
    font-size: 16px;
    font-weight: bold;
  `,
  h3: emotionCss`
    font-size: 14px;
    font-weight: bold;
  `,
  h4: {
    fontSize: 12,
    fontWeight: "bold"
  },
  lg: emotionCss`
    font-size: 16px;
  `,
  md: {
    fontSize: 14,
    fontWeight: "normal"
  },
  sm: {
    fontSize: 12,
    fontWeight: "normal"
  },
  xs: emotionCss`
    font-size: 10px;
  `
};

export const baseCss = {
  fontWeight: "normal",
  lineHeight: "normal",
  wordBreak: "keep-all",
  letterSpacing: "-0.5px"
};

export const btnCss = emotionCss`
  font-weight: 500;
  line-height: 1;
`;

/** @component */
export default function Typography({
  variant,
  color,
  css,
  btn,
  children,
  component,
  ...props
}) {
  if (!component) {
    component = btn ? "span" : "p";
  }

  const typoColor = colorsPallete[color] || color;
  const colorCss = {
    color: typoColor,
    // typo 내부의 svg가 같은 색상을 사용할 수 있게 fill 속성도 같은 값으로 지정
    fill: typoColor
  };

  return jsx(
    MuiTypography,
    {
      ...props,
      component,
      variant: null,
      css: [baseCss, variants[variant], colorCss, btn && btnCss, css]
    },
    children
  );
}

Typography.propTypes = {
  /**
   * 디자인 시스템에서 정의한 텍스트 설정
   */
  variant: PropTypes.oneOf(Object.keys(variants)),
  color: PropTypes.string,
  /**
   * 버튼 스타일링을 적용할지의 여부
   */
  btn: PropTypes.bool,
  /**
   * 디자인 시스템 기본값에서 수정이 필요할 때 넣는 emotion css
   */
  css: PropTypes.any
};

Typography.defaultProps = {
  color: "black",
  btn: false
};
