function Header(props){
  return(
    <h1>{props.course}</h1>
  )
}

function Part(props){
  return(
    <p>{props.part.name} : {props.part.exerciseCount}</p>
  )
}

function Content(props){
  return(
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}
function Total(props){
  const totalExerciseCount = props.exerciseCount
  return(
    <div>
      <p>Number of exercises : {totalExerciseCount}</p>
    </div>
  )
}

function App() {
  const parts = [
    { name: 'Fundamentals of React', exerciseCount: 10 },
    { name: 'Using props to pass data', exerciseCount: 7 },
    { name: 'State of a component', exerciseCount: 14 },
  ]
  const course = 'Half Stack application development'


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exerciseCount={parts[0].exerciseCount + parts[1].exerciseCount + parts[2].exerciseCount} />
    </div>
  )
}

export default App
