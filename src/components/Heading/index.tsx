import { FunctionComponent } from "react";
import styles from "./Heading.module.css";

type HeadingProps = {
  upperTagline: string;
  title: string;
  lowerTagline: string;
};

const Heading: FunctionComponent<HeadingProps> = ({
  upperTagline,
  title,
  lowerTagline,
}) => {
  return (
    <div className={styles.heading}>
      <p className={styles.upperTagline}>{upperTagline}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lowerTagline}>{lowerTagline}</p>
    </div>
  );
};

export default Heading;
