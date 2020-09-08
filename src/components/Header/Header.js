import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuthorized, logout } from "../../modules/Auth";

import { Typography, AppBar, Button, withStyles } from "@material-ui/core";
import Logo from "./assets/loftTaxiLogo.svg";

const styles = () => ({
  toolBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "64px",
    backgroundColor: "#fff",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  withoutDecoration: {
    textDecoration: "none",
  },
  img: {
    width: "150px",
  },
});

class Header extends Component {
  handleLogout = (e) => {
    e.preventDefault();

    const { logout } = this.props;

    logout();
  };
  renderLogButton = () => {
    const { isAuthorized } = this.props;

    if (isAuthorized) return <Button onClick={this.handleLogout}>Выйти</Button>;
  };
  render() {
    const { toolBar, withoutDecoration, img } = this.props.classes;
    return (
      <AppBar className={toolBar} color="primary">
        <Typography variant="body1">
          <img className={img} src={Logo} alt="LoftTaxi-Logo" />
        </Typography>
        <div>
          <Link to="/map" className={withoutDecoration}>
            <Button>Карта</Button>
          </Link>
          <Link to="/profile" className={withoutDecoration}>
            <Button>Профиль</Button>
          </Link>
          {this.renderLogButton()}
        </div>
      </AppBar>
    );
  }
}

const mapDispatchToProps = { logout };
const mapStateToProps = (state) => ({ isAuthorized: getIsAuthorized(state) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
