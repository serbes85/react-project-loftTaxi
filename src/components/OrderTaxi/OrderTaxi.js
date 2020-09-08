import React, { PureComponent } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAdresses,
  getCoords,
  fetchAdressListRequest,
  fetchRouteRequest,
  routeClear,
} from "../../modules/MapRoutes";
import { Paper, Button, Grid, Typography, withStyles } from "@material-ui/core";
import withLocalStorage from "../withLocalStorage";
import styles from "../OrderTaxi/styles.js";

const getOptions = (options, index) => {
  const result = [];

  if (!index) {
    options.map((item) => {
      return result.push({ value: item, label: item });
    });
  }
  return result;
};

class OrderTaxi extends PureComponent {
  state = {
    from: "",
    to: "",
    route: false,
  };
  handleChangeFrom = (from) => {
    this.setState({ from });
  };
  handleChangeTo = (to) => {
    this.setState({ to });
  };
  handleOnClick = (event) => {
    event.preventDefault();
    const { from, to, route } = this.state;
    const { fetchRouteRequest, routeClear, coords, removeRoute } = this.props;

    if (coords.length === 0) {
      fetchRouteRequest({ address1: from.value, address2: to.value });
    } else if (coords.length > 0 && route) {
      removeRoute();
      routeClear();
      this.setState({ from: "", to: "", route: false });
    }
  };
  componentDidMount() {
    const { fetchAdressListRequest } = this.props;

    fetchAdressListRequest();
  }
  componentDidUpdate() {
    const { addRoute, coords } = this.props;
    const { route } = this.state;

    if (coords.length > 0 && !route) {
      addRoute(coords);
      this.setState({ route: true });
    }
  }
  render() {
    const { adresses, initialValues } = this.props;
    const { from, to, route } = this.state;
    const {
      paper,
      select,
      buttonItem,
      buttonHover,
      title,
      text,
    } = this.props.classes;

    return (
      <Paper className={paper} elevation={1}>
        <form>
          <Grid item>
            {initialValues ? (
              <Typography className={title} variant="h5">
                {route ? "Заказ размещен" : null}
                {route ? (
                  <div className={text}>
                    <p>
                      Ваше такси уже едет к вам. Прибудет приблизительно через
                      10 минут.
                    </p>
                  </div>
                ) : null}
              </Typography>
            ) : (
              <Typography className={title} variant="h5">
                Заполните платежные данные
              </Typography>
            )}
          </Grid>
          {initialValues ? (
            <Grid container direction="column" wrap="nowrap">
              {route ? null : (
                <Grid className={select} item>
                  <Select
                    value={from}
                    onChange={this.handleChangeFrom}
                    options={getOptions(adresses, from)}
                    placeholder="Откуда"
                    isClearable
                    isSearchable
                  />
                </Grid>
              )}
              {route ? null : (
                <Grid className={select} item>
                  <Select
                    value={to}
                    onChange={this.handleChangeTo}
                    options={getOptions(adresses, to)}
                    placeholder="Куда"
                    isClearable
                    isSearchable
                  />
                </Grid>
              )}
            </Grid>
          ) : (
            <Grid item>
              <Typography className={text}>
                Укажите информацию о банковской карте, чтобы сделать заказ.
              </Typography>
            </Grid>
          )}
          <Grid item className={buttonItem}>
            {initialValues ? (
              <Button
                className={buttonHover}
                variant="outlined"
                hover="true"
                onClick={this.handleOnClick}
                disabled={from && to ? false : true}
              >
                {route ? "Сделать новый заказ" : "Вызвать такси"}
              </Button>
            ) : (
              <Button
                className={buttonHover}
                variant="outlined"
                hover="true"
                component={Link}
                to={"/profile"}
              >
                Перейти в профиль
              </Button>
            )}
          </Grid>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  adresses: getAdresses(state),
  coords: getCoords(state),
});
const mapDispatchToProps = {
  fetchAdressListRequest,
  fetchRouteRequest,
  routeClear,
};

export default withLocalStorage(
  "profileData",
  null
)(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OrderTaxi)));
