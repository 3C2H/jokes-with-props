import React from 'react';
import './App.css';
import Joke from './components/Joke'
import JokesList from './jokesList'
import Title from './components/Title'


class App extends React.Component {
	render() {
		
		const mappedJokes = JokesList.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} /> )
			//Use map on JokesList array: each entry named joke returns a *J*oke component with key, question & punchline props		
		
		return (
			<div className="App">
				<Title />
				{mappedJokes} 
			</div>
			//return the new array named mappedJokes
		)
	}
}

// *Old rendering using function keyword*
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
