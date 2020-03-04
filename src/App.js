import React from 'react';
import './App.css';
import Joke from './components/Joke'
import JokesList from './jokesList'
import Title from './components/Title'


// const mappedJokes = jokesList.map(joke => <jokesList key={joke.id} question={joke.question} punchline={joke.punchline} /> )

class App extends React.Component {
	render() {
		
		const mappedJokes = JokesList.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} /> )
				
		return (
			<div className="App">
				<Title />
				{mappedJokes}
			</div>
		)
	}
}

// function App() {
//   return (
//     <div className="App">
// 			<Title />
//       <Joke {...jokesList.joke1}/>
// 			<Joke {...jokesList.joke2}/>
// 			<Joke {...jokesList.joke3}/>
// 			<Joke {...jokesList.joke5}/>
// 			<Joke {...jokesList.joke4}/>
//     </div>
//   );
// }

export default App;
