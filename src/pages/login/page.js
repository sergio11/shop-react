import React from "react";
import styles from "./style.css";
import RaisedButton from 'material-ui/lib/raised-button';

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Login Page</h1>
        <p className={styles.lead}>Create an account to get started!</p>
        <RaisedButton label="Default" />
      </div>
    );
  }
}
