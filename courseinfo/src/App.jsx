const Header = (props) => {
  // name of the course
  console.log(props)
  return <h1>{props.course.name}</h1>
}
const Part = (props) => {
  console.log(props)
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  //parts & their nbr of exo 
  console.log(props)
  return (
    <div>
    {props.parts.map((part, index) => ( //loop over each part in the array
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}  
      </div>
  )
}


const Total = (props) => {
 // total nbr of exo
 const totalExercises = props.parts.reduce( //reduce() goes through the array and adds up all exercises
    (sum, part) => sum + part.exercises, 0) //sum starts at 0 (second argument of reduce).
 return <p>Number of exercises {totalExercises} </p>
}

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
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
       </div>
  )
}

export default App