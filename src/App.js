import React from 'react';
import './App.css';
import Joke from './components/Joke'
import jokesList from './jokesList'
import Title from './components/Title'


function App() {
  return (
    <div className="App">
			<Title />
      <Joke {...jokesList.joke1}/>
			<Joke {...jokesList.joke2}/>
			<Joke {...jokesList.joke3}/>
			<Joke {...jokesList.joke5}/>
			<Joke {...jokesList.joke4}/>
    </div>
  );
}

export default App;
