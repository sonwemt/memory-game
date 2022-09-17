import { useEffect, useState } from "react";
import ShowCardGrid from "../components/ShowCardgrid";
import uniqid from "uniqid";
import Header from "./Header";

let cardArray = [
  {
    image: 'placeholder1',
    name: 'name1',
    id: uniqid(),
    index: 0,
  },
  {
    image: 'placeholder2',
    name: 'name2',
    id: uniqid(),
    index: 1,
  },
  {
    image: 'placeholder3',
    name: 'name3',
    id: uniqid(),
    index: 2,
  },
  {
    image: 'placeholder4',
    name: 'name4',
    id: uniqid(),
    index: 3,
  },
];

function shuffleOrder() {
  for(let i = cardArray.length - 1; i > 0; i -= 1) { 
    let j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }
  cardArray.forEach((obj, i) => obj.index = i);
}

export default function CardGrid() {
  shuffleOrder();
  const [currentOrder, setCurrentOrder] = useState(cardArray);

  const [clickedCards, setClickedCards] = useState([]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
 
  const handleClick = (id) => {
    if(!clickedCards.find((heldId) => id === heldId)) {
      setClickedCards(clickedCards => clickedCards.concat(id));
      setScore(score + 1);
      if(score + 1 >= bestScore) {
        setBestScore(score + 1);
      }   
    } else {
      setClickedCards([]);
      setScore(0);
    }
  }

  useEffect(() => {
    shuffleOrder();
    setCurrentOrder(cardArray);
  }, [score])

  return(
    <div>
      <Header score={score} bestScore={bestScore} />
      <ShowCardGrid currentOrder={currentOrder} handleClick={handleClick} />
    </div>
  )
}