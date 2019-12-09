import React, { Component } from "react";
import PropTypes from "prop-types";
import { flowRight as compose } from "lodash.flowright";
import invariant from "tiny-invariant";
import { withSize } from "react-sizeme";

const defaultSizeAwarenessConfig = {
  monitorWidth: true,
  monitorHeight: false,
  monitorPosition: false,
  refreshRate: 16,
  refreshMode: "throttle",
  noPlaceholder: false,
  resizeDetectorStrategy: "scroll"
};

// todo: further design config object to customize the context awareness level
const defaultConfig = {
  sizeAwareness: {
    ...defaultSizeAwarenessConfig
  }
};

/**
 * Allows any component to become context aware - in various ways.
 * @returns An enlightened component.
 */
function enlighten(config = defaultConfig) {
  const { sizeAwareness = { ...defaultConfig.sizeAwareness } } = config;

  invariant(
    sizeAwareness,
    "You have to give your component at least SOME enligtenment.. be kind."
  );

  return function WrapComponent(WrappedComponent) {
    const EnlightenRenderWrapper = renderWrapper(WrappedComponent);

    class EnlightenedComponent extends Component {
      static displayName = `EnlightenedComponent(${getDisplayName(
        WrappedComponent
      )})`;

      static propTypes = {
        onSize: PropTypes.func
      };

      domEl = null;

      state = {
        width: undefined,
        height: undefined,
        position: undefined
      };

      componentDidMount() {
        invariant(true, "Up and running!");
      }

      render() {
        return <EnlightenRenderWrapper {...this.props} />;
      }
    }

    EnlightenedComponent.WrappedComponent = WrappedComponent;

    // todo: add composition of various relevant, open source higher-order components
    // HOC composition - open source enlightenment (add HOC packages here)
    const enlighten = compose(
      // Add Size Awareness
      withSize(defaultConfig.sizeAwareness)
    );

    return enlighten(EnlightenedComponent);
  };
}

export default enlighten;
