import React from 'react'
import '../style/joke.css'

class Joke extends React.Component {
  render() {
    return(
      <div className='jokeContainer'>
        <h2> {this.props.question} </h2> <br></br>
        <h3> {this.props.punchLine} </h3>
      </div>
    )
  }
}

export default Joke