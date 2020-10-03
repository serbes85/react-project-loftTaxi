import React, { PureComponent } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest, getError, getIsAuthorized } from "../../modules/Auth";
import { Field, reduxForm } from "redux-form";
import styles from "../LoginForm/styles.js";
import Logo from "./assets/loftTaxiLogo.svg";

import {
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  withStyles,
} from "@material-ui/core";

const renderField = ({
  input,
  label,
  type,
  placeholder,
  id,
  meta: { touched, error },
}) => {
  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      placeholder={placeholder}
      type={type}
      helperText={touched && error}
      error={touched && error && true}
      {...input}
    />
  );
};

const validate = (value) => {
  const errors = {};
  if (value.userName !== "test@test.com") {
    errors.userName = "Неверный логин";
  } else if (!value.userName) {
    errors.userName = "Поле обязательно для заполнения";
  } else if (value.userName.length < 8) {
    errors.userName = "Логин должен быть не менее 8 символов!";
  }
  if (value.userPassword !== "123123") {
    errors.userPassword = "Неправильный пароль";
  } else if (!value.userPassword) {
    errors.userPassword = "Поле обязательно для заполнения";
  } else if (value.userPassword.length < 6) {
    errors.userPassword = "Пароль должен быть не менее 6 символов!";
  }
  return errors;
};

class LoginForm extends PureComponent {
  render() {
    const { isAuthorized, handleSubmit, loginRequest, error } = this.props;
    const {
      backgroundForm,
      container,
      containerForm,
      imgItem,
      imgItemAnimation,
      paper,
      title,
      buttonItem,
      buttonHover,
    } = this.props.classes;

    const submit = (value) => {
      const { userName, userPassword } = value;

      loginRequest({ userName, userPassword });
    };

    if (isAuthorized) return <Redirect to="/map" />;
    if (error) return <p>Произошла ошибка</p>;

    return (
      <Paper className={backgroundForm} elevation={1}>
        <Grid container className={container} spacing={1}>
          <Grid className={imgItem} item>
            <img className={imgItemAnimation} src={Logo} alt="LoftTaxi-Logo" />
          </Grid>
          <Grid item>
            <Paper className={paper} elevation={1}>
              <form onSubmit={handleSubmit(submit)}>
                <Grid
                  className={containerForm}
                  container
                  direction="column"
                  spacing={4}
                  wrap="wrap"
                >
                  <Grid item>
                    <Typography variant="h4" className={title}>
                      Войти
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Field
                      name="userName"
                      type="text"
                      id="user-name"
                      label="Имя пользователя *"
                      placeholder="Имя пользователя *"
                      component={renderField}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      name="userPassword"
                      type="password"
                      id="user-password"
                      label="Пароль *"
                      placeholder="Пароль *"
                      component={renderField}
                    />
                  </Grid>
                  <Grid item className={buttonItem}>
                    <Button
                      className={buttonHover}
                      variant="contained"
                      type="submit"
                      hover="true"
                    >
                      Войти
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

LoginForm = reduxForm({
  form: "LoginForm",
  validate,
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuthorized: getIsAuthorized(state),
  error: getError(state),
});

const mapDispatchToProps = { loginRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(LoginForm)));
