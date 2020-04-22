import React from "react";
import MuiGrid from "@material-ui/core/Grid";

export default function Grid({ ...props }) {
  if (props.container && props.wrap === undefined) {
    // container의 wrap 기본값은 nowrap
    props.wrap = "nowrap";
  }
  return <MuiGrid {...props} />;
}
