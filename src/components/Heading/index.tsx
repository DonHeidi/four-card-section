import { FunctionComponent } from "react";

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
    <div>
      <p>{upperTagline}</p>
      <h1>{title}</h1>
      <p>{lowerTagline}</p>
    </div>
  );
};

export default Heading;
