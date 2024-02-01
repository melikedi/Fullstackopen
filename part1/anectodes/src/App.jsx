import { useState } from 'react'
function Button({handleClick,text}){
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, giveVote] = useState(Array(8).fill(0))
  const [mostVoted, setMostVoted] = useState(-1)

  const handleNextClick = () => {
    const i = Math.floor((Math.random() * 8))
    setSelected(i);
  }
  const handleVoteClick = () => {
    const copy = [...votes]
    // increment the value in position 2 by one
    copy[selected] += 1
    giveVote(copy)
    setMostVoted(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleNextClick} text='next anectode'/>
      <Button handleClick={handleVoteClick} text='vote'/>
      <h1>Anectode with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </div>
  )
}

export default App