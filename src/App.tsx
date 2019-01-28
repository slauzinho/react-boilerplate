import React from "react";
import { hot } from "react-hot-loader";
const styles = require("./assets/css/global.scss");
//import styles from "./assets/css/app.scss";

function Header() {
  return <h2 className={styles.red}>Let's start the Journey together!</h2>;
}

function App() {
  return <Header />;
}

export default hot(module)(App);
