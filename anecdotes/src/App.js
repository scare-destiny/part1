import React, { useState } from "react"

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  }

const Votes = ({votes}) => {
  return (
    <div>has {votes}</div>
  )
}

const Anecdotes = ({anecdote}) => {
  return (
    <div> {anecdote}</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const setRandomNumber = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const [allVotes, setAll] = useState(new Array(anecdotes.length).fill(0));

  const highestVote = allVotes.indexOf(Math.max(...allVotes))

  
  const handleVote = () => {
    const copy = [ ...allVotes ]
    copy[selected] += 1 
    setAll(copy)
  }

  return (
    <div>
      <h2> Anecdote of the day </h2>
      <Anecdotes anecdote={anecdotes[selected]} />
      <Votes votes={allVotes[selected]} />
      <Button handleClick={setRandomNumber} text='next anecdote' />  
      <Button handleClick={handleVote} text='vote' />  
      <h2> Anecdote with most votes </h2>
      <Anecdotes anecdote={anecdotes[highestVote]} />
      <Votes votes={allVotes[highestVote]} />

    </div>
  )
}

export default App;

