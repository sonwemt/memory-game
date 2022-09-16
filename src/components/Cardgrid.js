import { useEffect, useState } from "react";
import ShowCardGrid from "../components/ShowCardgrid";
import uniqid from "uniqid";
import Header from "./Header";

const initialOrder = [
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

export default function CardGrid() {
  const [currentCardOrder, setCardOrder] = useState(initialOrder);

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
  function shuffleCards() {
    let newArray = initialOrder;
    for(let i = newArray.length - 1; i > 0; i -= 1) { 
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    for(let i = newArray.length; i > 0; i -= 1) { 
      newArray[i - 1].index = i - 1;
    }
    setCardOrder(newArray);
  }

  useEffect(() => {
    shuffleCards();
  }, [score])

  return(
    <div>
      <Header score={score} bestScore={bestScore} />
      <ShowCardGrid currentCardOrder={currentCardOrder} handleClick={handleClick} />
    </div>
  )
}