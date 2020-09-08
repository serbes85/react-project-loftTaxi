import React, { PureComponent } from "react";
import { Route, Redirect } from "react-router-dom";
import { getIsAuthorized } from "../../modules/Auth";
import { connect } from "react-redux";

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component, ...rest } = this.props;

    return <Route {...rest} render={this.renderRoute} />;
  }
  renderRoute = (props) => {
    const { isAuthorized, component: RouteComponent } = this.props;

    return isAuthorized ? (
      <RouteComponent {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };
}

const mapStateToProps = (state) => ({ isAuthorized: getIsAuthorized(state) });

export default connect(mapStateToProps)(PrivateRoute);
