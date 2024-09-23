import React from "react";
import style from "./container.module.css";

const Container = (props: React.PropsWithChildren) => {
  return <div className={style.container}>{props.children}</div>;
};

export default Container;
