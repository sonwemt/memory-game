export default function Card(props) {
  return (
  <div className="cardblock" onClick={() => props.handleClick(props.cardData.id)}>
    <div className="imageholder">{props.cardData.image}</div>
    <div className="cardname">{props.cardData.name}</div>
  </div>
  );
}