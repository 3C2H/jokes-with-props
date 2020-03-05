import React from 'react';
import './App.css';
import Joke from './components/Joke'
import JokesList from './jokesList'
import Title from './components/Title'

function App() {
  const jokesComponent = JokesList.map(joke => <Joke key={joke.id} joke={joke}/>)
  return (
    <div className="App">
			<Title />
      {jokesComponent}
      {/* <Joke /> */}
    </div>
  );
}

// * ES6 + map rendering *
// class App extends React.Component {
// 	render() {
		
// 		const mappedJokes = JokesList.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} /> )
// 			//Use map on JokesList array: each entry named joke returns a *J*oke component with key, question & punchline props		
		
// 		return (
// 			<div className="App">
// 				<Title />
// 				{mappedJokes} 
// 			</div>
// 			//return the new array named mappedJokes
// 		)
// 	}
// }

// // * Rendering using function keyword *
// function App() {
//   return (
//     <div className="App">
// 			<Title />
// 			<Joke {...JokesList.id1}/>
// 			<Joke {...JokesList.id2}/>
// 			<Joke {...JokesList.id3}/>
// 			<Joke {...JokesList.id4}/>
// 			<Joke {...JokesList.id5}/>
//     </div>
//   );
// }

export default App;
