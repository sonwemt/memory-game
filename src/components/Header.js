import "../styles/header.css"
import Counter from "./Counter"

export default function Header (props) {
  return <div id="header">Memory Game <Counter score={props.score} bestScore={props.bestScore}/></div>
}