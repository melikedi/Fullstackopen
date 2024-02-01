import { useState } from 'react'
function Button({handleClick,text}){
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
function Display({option,voteCount}){
  return (
    <div>{option}:{voteCount}</div>
  )
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {console.log('good clicked'); setGood(good+1)}
  const handleBadClick = () => {console.log('bad clicked'); setBad(bad+1)}
  const handleNeutralClick = () => {console.log('neutral clicked'); setNeutral(neutral+1)}
  return (

    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Display option='good' voteCount={good}/>
      <Display option='neutral' voteCount={neutral}/>
      <Display option='bad' voteCount={bad}/>
    </div>

  )
}

export default App
