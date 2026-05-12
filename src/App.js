import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <Weather defaultCity="Melbourne" />
        <footer>
          This project was coded by Kimmy Brindle and is{" "}
          <a
            href="https://github.com/kimmybrindle/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
