import React, { Component } from "react";
import PropTypes from "prop-types";

export const EnlightenedComponent = WrappedComponent => <p>WIP...</p>;

EnlightenedComponent.propTypes = {
  // takes in children, so that it can observe them and inform them of changes through props.
  children: PropTypes.func
};

EnlightenedComponent.defaultProps = {
  children: undefined
};

export default EnlightenedComponent;
