import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className, ...allyProps }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  onClick: () => null,
  children: null,
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string,
};
export default Button;
