import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
