/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Typography from "components/Typography";

/** @component */
export default function FormLabel({ label, children, ...props }) {
  return (
    <div
      {...props}
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      `}
    >
      {label && (
        <Typography variant="md" component="label">
          {label}
        </Typography>
      )}
      {children}
    </div>
  );
}

FormLabel.propTypes = {
  label: PropTypes.string
};
