import React from "react";
import styles from "./Content.module.css";

class Content extends React.Component {
  render() {
    return <section className={styles.content}>{this.props.children}</section>;
  }
}

export default Content;
