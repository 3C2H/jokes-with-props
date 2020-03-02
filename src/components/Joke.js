import React from 'react'
import jokesList from '../jokesList'

class Joke extends React.Component {
  render() {
    return(
      <div>
        <h2> {this.props.question} </h2> <br></br>
        <h3> {this.props.punchLine} </h3>
      </div>
    )
  }
}

export default Joke