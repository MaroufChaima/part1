const Header = (props) => {
  // name of the course
  return <h1>{props.course}</h1>
}
const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Content = (props) => {
  //parts & their nbr of exo 
  return (
    <div>
     <Part part ={props.courseParts.part1}  exercises ={props.courseParts.exercises1} />
     <Part part ={props.courseParts.part2} exercises ={props.courseParts.exercises2}/>
     <Part part ={props.courseParts.part3} exercises ={props.courseParts.exercises3}/>
    </div>
  )
}


const Total = (props) => {
 // total nbr of exo
 return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const App = () => {
  //header props
  const course = 'Half Stack application development' 
  //content props
  const courseParts = {
  part1: 'Fundamentals of React',
  exercises1: 10,
  part2: 'Using props to pass data',
  exercises2: 7,
  part3: 'State of a component',
  exercises3: 14
}

  return (
    <div>
      <Header course={course} />
      <Content courseParts = {courseParts}/>
      <Total exercises1={courseParts.exercises1} exercises2 = {courseParts.exercises2} exercises3={courseParts.exercises3}/>
    </div>
  )
}

export default App