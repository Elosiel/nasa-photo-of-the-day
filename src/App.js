import React, {useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-25')
    .then(response =>{
      console.log(response.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
