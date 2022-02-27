import logo from './kubernetes-icon.svg';
import './App.css';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


function App() {
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
        <p>Data: {SERVER_URL ? getData(SERVER_URL) : "No data, url is not set. Please set the REACT_APP_SERVER_URL environment variable to point to your database"}</p>
        <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/#define-an-environment-variable-for-a-container">See how here!</a>
      </header>
    </div>
  );
}

async function getData(url){
  await fetch("http://" + url + "/data")
    .then(res => res.json())
}

export default App;
