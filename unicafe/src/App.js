import React, { useState } from "react";


const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value} </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const allStatistics = () => {
    return good + bad + neutral;
  };

  const averageStatistics = () => {
    return (good - bad) / allStatistics();
  };
  
  const positiveStatistics = () => {
    return good / allStatistics() * 100; 
  };

  if (allStatistics() === 0) {
    return (
      <div>
        please leave your feedback
      </div>
    )
  }

  return (
    <div>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={allStatistics()} />
          <StatisticLine text='average' value={averageStatistics()} />
          <StatisticLine text='positive' value={positiveStatistics()} />
          </tbody>
      </table>
    </div>
  )
}


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
  }
  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setValueforButtonGood = () => setGood(good + 1)
  const setValueforButtonNeutral = () => setNeutral(neutral + 1)
  const setValueforButtonBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={setValueforButtonGood} text='good' />
      <Button onClick={setValueforButtonNeutral} text='neutral' />
      <Button onClick={setValueforButtonBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};


export default App;