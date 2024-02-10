import Part from "./Part";
function Content({parts}) {
    return(
        <div>
            {parts.map(part=><Part key={part.id} part={part}></Part>)}
        </div>
      )
}
export default Content