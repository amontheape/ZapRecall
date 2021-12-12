import { useState } from "react/cjs/react.development";
import AnswerOptions from "./AnswerOptions"

export default function Card({ data, status, setStatus, counter, setCounter, goal, setGoal, setTitle, setComponent}){
	const [mistakes, setMistakes] = useState(0); //0-8
	const [zaps, setZaps] = useState(0); //0-8

	const cardStatus = {
		question: () => (
			<>
				<span>{`${counter}/8`}</span>
				<h2>{data.question}</h2>
				<button className="flip-button" onClick={() => setStatus('choosing')}>virar card</button>
			</>
		),

		choosing: () => (
			<>
				<span>{`${counter}/8`}</span>
				<h2>{data.question}</h2>
				<h3>{data.answer}</h3>
				<AnswerOptions
					mistakes={mistakes}
					setMistakes={setMistakes}
					setStatus={setStatus}
					zaps={zaps}
					setZaps={setZaps} />
			</>
		),

		answered: () => (
			<>
				<span>{`${counter}/8`}</span>
				<h2>{data.question}</h2>
				<h3>{data.answer}</h3>
				<button className="flip-button" onClick={() => 
					{
						setCounter(counter + 1);
						setStatus('question');
					}
				}>virar card</button>
			</>
		)
	}

	function handleEnd() {

		return goal !== zaps
			? (
				<>
					<span>Putz.. &#128549;</span>
					<p>{`Você esqueceu ${mistakes} flashcards..`}</p>
					<p>Não desanime! Na próxima você consegue!</p>
					<button onClick={() => reset()}>Tentar novamente</button>
				</>
			)

			: (
				<>
					<span>PARABÉNS! </span>
					<p>Você não esqueceu de nenhum flashcard!</p>
					<button onClick={() => reset()}>Tentar novamente</button>
				</>
			)
	}

	function reset() {
		setGoal(0);
		setComponent('home');
		setStatus('question');
		setCounter(1);
		setMistakes(0);
		setZaps(0);
	}

	return (
		<>
			{ counter === 9 
				? () => {
					setTitle(false);
					handleEnd();
				}  
				: (<div className="card">{cardStatus[status]()}</div>)
			}
		</>
	)
}