import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NexusHosting</h1>
        <ul>
          <li>Minecraft Java & Bedrock Servers</li>
          <li>99.9% Uptime</li>
          <li>Milk</li>
        </ul>
        <text>Get started in 5 minutes!</text>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
