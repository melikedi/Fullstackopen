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
  const [total, setTotal] = useState(0)
  const [avarage, setAvarage] = useState(0)
  const [positive, setPositive] = useState('')
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const computeStatistics = (good,bad,neutral) => {
    const updatedTotal = good+bad+neutral;
    setTotal(updatedTotal);
    setPositive(good * 100/updatedTotal + '%');
    setAvarage((good - bad)/updatedTotal);
  }
  const handleGoodClick = () => {
    console.log('good clicked'); 
    const updatedGood = good+1; 
    setGood(updatedGood); 
    computeStatistics(updatedGood,bad,neutral);
  }
  const handleBadClick = () => {
    console.log('bad clicked'); 
    const updatedBad = bad+1; 
    setBad(updatedBad);
    computeStatistics(good,updatedBad,neutral);
  }
  const handleNeutralClick = () => {
    console.log('neutral clicked'); 
    const updatedNeutral = neutral+1;
    setNeutral(updatedNeutral);
    computeStatistics(good,bad,updatedNeutral);
  }
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
      <Display option='all' voteCount={total}/>
      <Display option='avarage' voteCount={avarage}/>
      <Display option='positive' voteCount={positive}/>
    </div>

  )
}

export default App
