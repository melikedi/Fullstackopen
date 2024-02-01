import { useState } from 'react'
function Statistics({allClicks}){
  const [good, bad, neutral] = [allClicks.good, allClicks.bad,allClicks.neutral]
  const total = good + bad + neutral;
  const avarage = (good - bad)/total;
  const positive = good * 100/total + '%';
  if(total === 0) {
    return(
      <div>No feedback given</div>
    )
  } else {
    return (
     <div>
      <table>
        <tbody>
            <StatisticLine option='good' value={good}/>
            <StatisticLine option='neutral' value={neutral}/>
            <StatisticLine option='bad' value={bad}/>
            <StatisticLine option='all' value={total}/>
            <StatisticLine option='avarage' value={avarage}/>
            <StatisticLine option='positive' value={positive}/>
         
        </tbody>
      </table>
     
     </div>
    )
  }
}
function Button({handleClick,text}){
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
function StatisticLine({option,value}){
  return (
    <tr><td>{option}</td><td>{value}</td></tr>
  )
}
function App() {
  const [allClicks, setClicks] = useState({good:0, bad:0, neutral:0})
  
  const handleGoodClick = () => {
    console.log('good clicked'); 
    setClicks({...allClicks, good:allClicks.good+1});
  }
  const handleBadClick = () => {
    console.log('bad clicked'); 
    setClicks({...allClicks, bad:allClicks.bad+1});
  }
  const handleNeutralClick = () => {
    console.log('neutral clicked'); 
    setClicks({...allClicks, neutral:allClicks.neutral+1});
  }
  return (

    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics allClicks={allClicks}></Statistics>
    </div>

  )
}

export default App
