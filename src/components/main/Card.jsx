import { useState } from "react/cjs/react.development";
import AnswerOptions from "./AnswerOptions"

export default function Card({ data, status, setStatus, counter, setCounter, goal, setGoal, setTitle, setComponent, cardNumber}){
	const [mistakes, setMistakes] = useState(0);
	const [zaps, setZaps] = useState(0);

	const cardStatus = {
		question: () => (
			<>
				<span data-identifier="counter">{`${counter}/${cardNumber}`}</span>
				<h2 className="centered-question">{data.question}</h2>
				<button className="flip-button" data-identifier="arrow" onClick={() => setStatus('choosing')}>
					<ion-icon name="arrow-undo"></ion-icon>
				</button>
			</>
		),

		choosing: () => (
			<>
				<span data-identifier="counter">{`${counter}/${cardNumber}`}</span>
				<div className="choosing">
					<h2 className="top-question">{data.question}</h2>
					<h3>{data.answer}</h3>
					<AnswerOptions
						mistakes={mistakes}
						setMistakes={setMistakes}
						setStatus={setStatus}
						zaps={zaps}
						setZaps={setZaps} />
				</div>
			</>
		),

		answered: () => (
			<>
				<span data-identifier="counter">{`${counter}/${cardNumber}`}</span>
				<div className="answered">
					<h2 className="top-question">{data.question}</h2>
					<h3>{data.answer}</h3>
					<button className="flip-button" data-identifier="arrow" onClick={() => 
						{
							setCounter(counter + 1);
							setStatus('question');
						}}>
						<ion-icon name="arrow-undo"></ion-icon>
					</button>
				</div>
			</>
		)
	}

	function HandleEnd() {
		setTitle(false);

		return parseInt(zaps) >= parseInt(goal)
			? (
				<div className="conclusion">
					<span>PARABÉNS! 🥳</span>
					{	
						zaps > goal 
						? <p>{`Você atingiu ${zaps} zaps! Sua meta era ${goal} zaps.`}</p> 
						: <p>{`Você atingiu sua meta de ${goal} zaps!`}</p>
					}
					{mistakes > 0 && <p>{`Porém, você esqueceu de ${mistakes} flashcards..`}</p>}
					<button className='deck-button' onClick={() => reset()}>
						Tentar novamente
						<ion-icon name="play-forward"></ion-icon>
					</button>
				</div>
			)

			: (
				<div className="conclusion">
					<span>Putz.. 😥</span>
					<p>{`Você atingiu ${zaps} da sua meta de ${goal} zaps..`}</p>
					{mistakes > 0 && <p>{`Você também esqueceu de ${mistakes} flashcards..`}</p>}
					<p>Não desanime! Na próxima você consegue!</p>
					<button className='deck-button' onClick={() => reset()}>
						Tentar novamente
						<ion-icon name="play-forward"></ion-icon>
					</button>
				</div>
			)
	}

	function reset() {
		setGoal('');
		setComponent('home');
		setStatus('question');
		setCounter(1);
		setMistakes(0);
		setZaps(0);
	}

	return (
		<>
			{ counter === 9 
				? <HandleEnd />  
				: (<div className="card" data-identifier="flashcard">{cardStatus[status]()}</div>)
			}
		</>
	)
}
