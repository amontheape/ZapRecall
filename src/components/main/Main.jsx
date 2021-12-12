import Header from './Header';
import Card from './Card';
import AnswerBox from './AnswerBox';
import {decks} from '../../data/decks'
import { useState } from 'react';

export default function Main({component, setComponent}) {
  const [counter, setCounter] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);

  return (
    <>
      <Header />
      <Card>
        {component === 'deck01' ? 'colocar cartas deck01' : 'colocar cartas deck02'}
      </Card>
    </>
  )
}