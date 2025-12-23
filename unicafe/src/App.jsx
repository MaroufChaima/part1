import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button> 
)

const Display = ({ text, value }) => (
  <p>{text} {value}</p>
)

const App = () => {
  // save clicks of each button to its own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all =  good + neutral + bad
  const average = all === 0 ? 0 :(good - bad) / all
  const positive = all === 0 ? 0 :(good / all) * 100
  


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=>{setGood(good +1)}} />
      <Button text="neutral" onClick={()=>{setNeutral(neutral +1)}} />
      <Button text="bad" onClick={()=>{setBad(bad +1)}} /> 
        
        <h1>statistics</h1>
        <Display text="good" value={good} />
        <Display text="neutral" value={neutral} />
        <Display text="bad" value={bad} />
        <Display text="all" value={all} />
        <Display text="average" value={average} />
        <Display text="positive" value={positive} />
    </div>
  )
}

export default App