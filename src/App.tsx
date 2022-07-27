import Card from "./components/Card";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <header>
        <Heading
          upperTagline="Reliable, efficient delivery"
          title="Powered by Technology"
          lowerTagline="Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
        />
      </header>
      <main>
        <Card
          title="Supervisor"
          copy="Monitors activity to identify project roadblocks"
          icon={{
            url: `${process.env.PUBLIC_URL}/images/icon-supervisor.svg`,
            alt: "supervisor",
          }}
        />

        <Card
          title="Team Builder"
          copy="Scans our talent network to create the optimal team for your project"
          icon={{
            url: `${process.env.PUBLIC_URL}/images/icon-team-builder.svg`,
            alt: "supervisor",
          }}
        />

        <Card
          title="Karma"
          copy="Regularly evaluates our talent to ensure quality"
          icon={{
            url: `${process.env.PUBLIC_URL}/images/icon-karma.svg`,
            alt: "supervisor",
          }}
        />

        <Card
          title="Calculator"
          copy="Uses data from past projects to provide better delivery estimates"
          icon={{
            url: `${process.env.PUBLIC_URL}/images/icon-calculator.svg`,
            alt: "supervisor",
          }}
        />
      </main>
    </>
  );
}

export default App;
