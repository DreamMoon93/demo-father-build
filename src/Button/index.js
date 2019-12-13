import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

export default ({ children, color = "blue" }) => {
  return (
    <button
      className={classnames(styles.large, styles.bold)}
      style={{ color: color }}
    >
      {children}
    </button>
  );
};
