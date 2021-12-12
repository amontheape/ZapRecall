import {useState} from 'react';
import {decks} from '../../data/decks'
import Header from './Header';
import Card from './Card';

export default function Main({component, setComponent, goal, setGoal}) {
  const [status, setStatus] = useState('question'); //question, choosing, answered
  const [counter, setCounter] = useState(1); //1-9
  const [title, setTitle] = useState(true); // true or false

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
      />
    </>
  )
}