import logo from './kubernetes-icon.svg';
import React, { useEffect,useState } from 'react'
import './App.css';

function App() {
  const [mindsterData, setMindsterData] = useState(undefined)
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  useEffect(()=> {
    async function fetchData() {
      let mindsterData = await getMindsterData(SERVER_URL)
      console.log(mindsterData)
      setMindsterData(mindsterData)
    }
    fetchData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Mindster!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <a> 
          Your backend url is: 
          {SERVER_URL || " undefined"}
        </a>
        <p>Data: {SERVER_URL ? mindsterData : "No data, url is not set. Please set the REACT_APP_SERVER_URL environment variable to point to your database"}</p>
        {!SERVER_URL && <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/#define-an-environment-variable-for-a-container">See how here!</a>}
        <p>If you dont have a backend then deploy this guy and expose it with an IP: ´jcrmindster/hello-mindster-backend-node´ </p>
      </header>
    </div>
  );
}

async function getMindsterData(url) {
  let res = await fetch("http://" + url + "/")
    .then(res => res.text())
    .catch(console.error)
  return res
}

export default App;
