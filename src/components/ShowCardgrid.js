import Card from "./Card"

export default function ShowCardGrid(props) {
  return props.currentOrder.map((card) => {
    return <Card handleClick={props.handleClick} cardData={card} key={card.id}/>
  })
}