import React from 'react';

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
);

const Content = (props) => (
  <div>
    <p>{props.part} {props.exercises}</p>
  </div>
);

const Total = (props) => (
  <div>
    <p>Number of exercises {props.total}</p>
  </div>
);

const Part = (props) => (
  <div>
    <Content part={part[props.value]} exercises={exercises[props.value]} />
  </div>
);

const course = 'Half Stack application development';
const part = [ 'Fundamentals of React', 'Using props to pass data', 'State of a component' ];
const exercises = [ 10, 7, 14 ];

export const App = () => {
    return (
    <div>
      <Header course={course} />
      <Part value={0} />
      <Part value={1} />
      <Part value={2} />
      <Total total={exercises[0] + exercises[1] + exercises[2]} />
    </div>
  )
}
