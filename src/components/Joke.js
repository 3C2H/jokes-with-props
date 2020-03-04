import React from 'react'
import '../style/joke.css'


class Joke extends React.Component {
	render()
	{
		if (this.props.question === '') {
			return(
        <div className='jokeContainer'>
          <h2 className='punchLine' style={{ marginTop:0, color:'green'}} > {this.props.punchline} </h2>
        </div>
      )
    }
    else
    return(
      <div className='jokeContainer'>
        <h2 className='question'> {this.props.question} </h2> <br></br>
        <h3 className='punchLine'> {this.props.punchline} </h3>
      </div>
		)
  }
}

//	*Shorter logic*
	// return(
	// 	<div className='jokeContainer'>
	// 		<h2 className='question' style= {{ display: this.props.question ? 'block' : 'none' }}> {this.props.question} </h2> <br></br>
	// 		<h3 className='punchLine'> {this.props.punchLine} </h3>
	// 	</div>
	// )

	//	*Shorter-er logic*
	// return(
	// 	<div className='jokeContainer'>
	// 		<h2 className='question' style= {{ display: !this.props.question && 'none' }}> {this.props.question} </h2> <br></br>
	// 		<h3 className='punchLine'> {this.props.punchLine} </h3>
	// 	</div>
	// )

// *Function keyword style*
// function Joke(props) { 
//   if (props.question === '') {
//     return(
//       <div className='jokeContainer'>
//         <h2 className='punchLine' style={{ marginTop:0, color:'green'}} > {props.punchLine} </h2>
//       </div>
//     )
//   }
//   else
//   return(
//     <div className='jokeContainer'>
//       <h2 className='question'> {props.question} </h2> <br></br>
//       <h3 className='punchLine'> {props.punchLine} </h3>
//     </div>
//   )
// }

//*Arrow fct style*
// const Joke = (props) => {
//   if (props.question === '') {
//     return(
//       <div className='jokeContainer'>
//         <h2 className='punchLine' style={{ marginTop:0, color:'green'}} > {props.punchLine} </h2>
//       </div>
//     )
//   }
//   else
//   return(
//     <div className='jokeContainer'>
//       <h2 className='question'> {props.question} </h2> <br></br>
//       <h3 className='punchLine'> {props.punchLine} </h3>
//     </div>
//   )
// } 

export default Joke