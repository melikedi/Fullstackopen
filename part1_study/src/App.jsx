function Greetings() {
  return(
    <div>
      <p>Hello from first React Component's Greetings function</p>
    </div>
  )
}
function GetSum(props) {
  return(
    <p>
      {props.a} plus {props.b} is {props.a + props.b}
    </p>
  )
}
function PrintDate() {
  const now = new Date()
  return(
    <div>
      <p>Current Date : {now.toString()}</p>
    </div>
  )
}
function App() {
  const a = 10
  const b = 20
  return (
    <div>
      <PrintDate />
      <h1>Greetings</h1>
      <Greetings />
      <Greetings />
      <GetSum a={50} b={60} />
    </div>
    
  )
}



export default App

