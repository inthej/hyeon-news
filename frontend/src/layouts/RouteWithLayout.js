import PropTypes from 'prop-types';
import React from 'react';
import {Route} from "react-router-dom";

const RouteWithLayout = props => {
  const {layout: Layout, component: Component, ...rest} = props;
  return (
    <Route {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps}/>
        </Layout>
      )}
    >
    </Route>
  );
}

RouteWithLayout.propTypes = {
  component: PropTypes.node.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
}

export default RouteWithLayout;
