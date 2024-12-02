import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="bg-zinc-900 fixed w-screen max-w-full z-20 top-0 start-0">
        <div>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              className="text-2xl font-medium text-white hover:text-indigo-700"
              href="/"
            >
              NexusHosting
            </a>
          </div>
          <h1 className="mt-5 text-indigo-700 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Nexus Hosting
          </h1>
          <p className="mt-2 text-zinc-300 font-medium italic">
            <span> Welcome to Nexus Hosting </span>
          </p>

          <h2 className="mt-5 text-white scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-12 pr-96">
            Dedicated Servers
          </h2>

          <ul>
            <li>Minecraft Java & Bedrock Servers</li>
            <li>99.9% Uptime</li>
            <li>Milk</li>
          </ul>
          <text>Get started in 5 minutes!</text>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </nav>
    </>
  );
}

export default App;
