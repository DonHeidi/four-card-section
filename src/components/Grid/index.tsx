import { ReactNode } from "react";
import styles from "./Grid.module.css";

type GridProps = {
  children: ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Grid;
