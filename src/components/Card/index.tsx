import { FunctionComponent } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  copy: string;
  icon: {
    url: string;
    alt: string;
  };
};

const Card: FunctionComponent<CardProps> = ({ title, copy, icon }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{copy}</p>
      <img src={icon.url} alt={icon.alt} />
    </div>
  );
};

export default Card;
