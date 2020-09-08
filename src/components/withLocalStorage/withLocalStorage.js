import React, { Component } from "react";
import { saveData, loadData } from "../../modules/Profile/api.js";

export const withLocalStorage = (key, initValue) => (WrappedComponent) => {
  return class Wrapper extends Component {
    loadDataLocalStorage = () => loadData(key) || initValue;
    saveDataLocalStorage = (data) => {
      saveData(key, data);
      this.setState({ ...this.state });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          initialValues={this.loadDataLocalStorage()}
          saveData={this.saveDataLocalStorage}
        />
      );
    }
  };
};

export default withLocalStorage;
