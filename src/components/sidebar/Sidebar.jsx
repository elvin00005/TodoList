import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={cn(styles.container, "d-flex flex-column p-2")}>
      <Link to="/">Main</Link>
      <Link to="/todolist">TodoList</Link>
    </div>
  );
};

export default Sidebar;
