import React, { useState, useEffect } from 'react';
import GitHubCard from './components/GitHubCard/GitHubCard';
import './App.css';


let GitHubAPI = async () => {
  const response = await fetch('https://api.github.com/users/wtcrowe4')
  const data = await response.json()
  //console.log(data)
  return data
  };

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    GitHubAPI().then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <h1>Playing with Snapshot Tests</h1>
      <div>
        <h3 style={{textAlign: "left", paddingLeft: "50px"}}>My Github Card</h3>
        <GitHubCard data={data}/>
      </div>
    </div>
  );
  }


export default App;
