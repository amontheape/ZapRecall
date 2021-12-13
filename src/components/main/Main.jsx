import {useState} from 'react';
import {decks} from '../../data/decks'
import Header from './Header';
import Card from './Card';

export default function Main({component, setComponent, goal, setGoal}) {
  const [status, setStatus] = useState('question');
  const [counter, setCounter] = useState(1);
  const [title, setTitle] = useState(true);

  return (
    <>
      <Header />

      {title && (<div className="deck-title">{decks[component].title}</div>)}

      <Card 
        data={decks[component].cards[counter-1]}
        status={status}
        setStatus={setStatus}
        counter={counter}
        setCounter={setCounter}
        goal={goal}
        setGoal={setGoal}
        setTitle={setTitle}
        setComponent={setComponent}
        cardNumber={decks[component].cards.length}
      />
    </>
  )
}