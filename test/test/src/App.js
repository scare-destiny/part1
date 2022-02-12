import React from 'react'
import ReactDOM from 'react-dom'

const Part_1 = (props) => {
  return(
    <p>
      {props.part1} {props.exercises1}
    </p>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part_1 part={props.part1} exercises={props.exercises1}/>
      <Part_2 part={props.part2} exercises={props.exercises2}/>
      <Part_3 part={part3} exercises={exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total exercises={exercises1+exercises2+exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
