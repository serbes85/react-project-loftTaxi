import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import withLocalStorage from "../withLocalStorage";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  withStyles,
} from "@material-ui/core";
import styles from "../ProfileForm/styles.js";

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
  if (!value.numberCard) {
    errors.numberCard = "Поле обязательно для заполнения";
  } else if (value.numberCard.length !== 0 && value.numberCard.length !== 16) {
    errors.numberCard = "В номере карты 16 цифр";
  }
  if (!value.userName) {
    errors.userName = "Поле обязательно для заполнения";
  } else if (value.userName.match(/^[A-Za-z]+$/) === null) {
    errors.userName = "В имени могут быть только латинские буквы";
  }
  if (!value.cvc) {
    errors.cvc = "Поле обязательно для заполнения";
  } else if (value.cvc.length !== 0 && value.cvc.length !== 3) {
    errors.cvc = "CVC состоит из 3 цифр";
  } else if (value.cvc.match(/^[0-9]+$/) === null) {
    errors.cvc = "CVC может содержать только цифры";
  }
  return errors;
};

class ProfileForm extends PureComponent {
  state = {
    isSaveProfile: false,
  };
  render() {
    const { handleSubmit } = this.props;
    const { isSaveProfile } = this.state;
    const {
      backgroundForm,
      container,
      formItem,
      paperForm,
      paperField,
      buttonItem,
      buttonHover,
      withoutDecoration,
    } = this.props.classes;

    const submit = (values) => {
      const { saveData } = this.props;

      saveData(values);
      this.setState({ isSaveProfile: true });
    };

    return (
      <Paper className={backgroundForm} elevation={1}>
        <Grid
          container
          className={container}
          spacing={1}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Paper elevation={1} className={paperForm}>
              <Typography variant="h4">Профиль</Typography>
              <form onSubmit={handleSubmit(submit)}>
                {isSaveProfile ? (
                  <Grid item>
                    <div>
                      <p>
                        Платёжные данные обновлены. Теперь вы можете заказывать
                        такси.
                      </p>
                    </div>
                  </Grid>
                ) : null}
                <Grid container direction="row">
                  {isSaveProfile ? null : (
                    <Grid item xs={6} className={formItem}>
                      <Paper elevation={3} className={paperField}>
                        <Field
                          name="numberCard"
                          type="text"
                          id="number-card"
                          label="Номер карты *"
                          placeholder="Номер карты *"
                          component={renderField}
                        />
                        <Field
                          name="expiryDate"
                          id="expiry-date"
                          label="Срок действия *"
                          component={renderField}
                          type="date"
                        />
                      </Paper>
                    </Grid>
                  )}
                  {isSaveProfile ? null : (
                    <Grid item xs={6} className={formItem}>
                      <Paper elevation={3} className={paperField}>
                        <Field
                          name="userName"
                          type="text"
                          id="user-name"
                          label="Имя владельца *"
                          placeholder="Имя владельца *"
                          component={renderField}
                        />
                        <Field
                          name="cvc"
                          type="text"
                          id="cvc-card"
                          label="CVC *"
                          placeholder="CVC *"
                          component={renderField}
                        />
                      </Paper>
                    </Grid>
                  )}
                </Grid>
                <Grid item className={buttonItem}>
                  <Button
                    className={buttonHover}
                    variant="contained"
                    type="submit"
                    hover="true"
                  >
                    {isSaveProfile ? (
                      <Link to="/map" className={withoutDecoration}>
                        <Button>Перейти на карту</Button>
                      </Link>
                    ) : (
                      "Сохранить"
                    )}
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

ProfileForm = reduxForm({
  form: "ProfileForm",
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(ProfileForm);

const mapDispathToProps = {};
const mapStateToProps = (state) => ({});

export default withLocalStorage(
  "profileData",
  null
)(connect(mapStateToProps, mapDispathToProps)(withStyles(styles)(ProfileForm)));
