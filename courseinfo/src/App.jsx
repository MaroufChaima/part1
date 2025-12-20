const Header = (props) => {
  // name of the course
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  //parts & their nbr of exo
  return <p>{props.part} {props.exercises}</p>
  
}

const Total = (props) => {
 // total nbr of exo
 return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const App = () => {
  //header props
  const course = 'Half Stack application development' 
  //content props
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part= {part1} exercises= {exercises1}/>
      <Content part= {part2} exercises= {exercises2}/>
      <Content part= {part3} exercises= {exercises3}/> 
      <Total exercises1={exercises1} exercises2 = {exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App