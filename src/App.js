import React from 'react'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      < Content parts={course.parts[0].name
        + ": " + course.parts[0].exercises} />
      < Content parts={course.parts[1].name
        + ": " + course.parts[1].exercises} />
      < Content parts={course.parts[2].name
        + ": " + course.parts[2].exercises} />
      <Total parts={course.parts[0].exercises
        + course.parts[1].exercises
        + course.parts[2].exercises}
      />
    </div>
  )
}

const Header = (props) => {
  return (
    <h3>
      This is {props.course}
    </h3>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.parts}
    </p>

  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises: {props.parts}
    </p>
  )
}




export default App
