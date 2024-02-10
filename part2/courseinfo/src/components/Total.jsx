function Total({parts}) {
    var total = parts.reduce((sum,part)=>sum+part.exercises,0)
    return(
        <h5>
           total of {total} exercises 
        </h5>
    )
}
export default Total