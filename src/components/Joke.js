import React from 'react'
import '../style/joke.css'
import JokesList from '../jokesList'

function Joke(props) {
	return(
		<div>
			<h2 className='question'> {props.joke.question} </h2> <br></br>
      <h3 className='punchline'> {props.joke.punchline} </h3>
		</div>
	)
}


// // // non-working test of mapping in component
// class Joke extends React.Component {
// 	render()	{
// 		const mappedJokes = JokesList.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
// 		)
// 		return(
// 			console.log(mappedJokes),
// 			<div className='jokeContainer'>
// 				<h2 className='question'> {this.props.question} </h2> <br></br>
// 	      <h3 className='punchline'> {this.props.punchline} </h3>
// 			</div>
// 		)
// 	}

	// 	if (this.joke.question === '') {
	// 		return(
  //       <div className='jokeContainer'>
  //         <h2 className='punchline' style={{ marginTop:0, color:'green'}} > {this.props.punchline} </h2>
  //       </div>
  //     )
  //   }
  //   else
  //   return(
  //     <div className='jokeContainer'>
  //       <h2 className='question'> {this.props.question} </h2> <br></br>
  //       <h3 className='punchline'> {this.props.punchline} </h3>
  //     </div>
	// 	)
  // }
// }

// //	*Shorter logic*
// class Joke extends React.Component {
// 	render() { 	
// 		return(
// 			<div className='jokeContainer'>
// 				<h2 className='question' style= {{ display: this.props.question ? 'block' : 'none' }}> {this.props.question} </h2> <br></br>
// 				<h3 className='punchline'> {this.props.punchline} </h3>
// 			</div>
// 		)
// 	}
// }	

// // *Shorter-er logic*
// class Joke extends React.Component {
// 	render() {
// 		return(
// 			<div className='jokeContainer'>
// 				<h2 className='question' style= {{ display: !this.props.question && 'none' }}> {this.props.question} </h2> <br></br>
// 				<h3 className='punchline'> {this.props.punchline} </h3>
// 			</div>
// 		)
// 	}
// }	

// // *Function keyword style*
// function Joke(props) { 
//   if (props.question === '') {
//     return(
//       <div className='jokeContainer'>
//         <h2 className='punchline' style={{ marginTop:0, color:'green'}} > {props.punchline} </h2>
//       </div>
//     )
//   }
//   else
//   return(
//     <div className='jokeContainer'>
//       <h2 className='question'> {props.question} </h2> <br></br>
//       <h3 className='punchline'> {props.punchline} </h3>
//     </div>
//   )
// }

export default Joke