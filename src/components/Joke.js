import React from 'react'
import '../style/joke.css'

class Joke extends React.Component {
  render() {
    if (this.props.question === '') {
      return(
        <div className='jokeContainer'>
          <h3 className='punchLine' style={{ marginTop:0 }} > {this.props.punchLine} </h3>
        </div>
      )
    }
    else
    return(
      <div className='jokeContainer'>
        <h2 className='question'> {this.props.question} </h2> <br></br>
        <h3 className='punchLine'> {this.props.punchLine} </h3>
      </div>
    )
  }
}

export default Joke