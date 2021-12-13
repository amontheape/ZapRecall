import { useState } from "react/cjs/react.development";
import AnswerOptions from "./AnswerOptions"

export default function Card({ data, status, setStatus, counter, setCounter, goal, setGoal, setTitle, setComponent}){
	const [mistakes, setMistakes] = useState(0);
	const [zaps, setZaps] = useState(0);

	const cardStatus = {
		question: () => (
			<>
				<span>{`${counter}/8`}</span>
				<h2 className="centered-question">{data.question}</h2>
				<button className="flip-button" onClick={() => setStatus('choosing')}>
					<ion-icon name="arrow-undo"></ion-icon>
				</button>
			</>
		),

		choosing: () => (
			<>
				<span>{`${counter}/8`}</span>
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
				<span>{`${counter}/8`}</span>
				<div className="answered">
					<h2 className="top-question">{data.question}</h2>
					<h3>{data.answer}</h3>
					<button className="flip-button" onClick={() => 
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

		return parseInt(goal) !== parseInt(zaps)
			? (
				<div className="conclusion">
					<span>Putz.. 😥</span>
					<p>{`Você atingiu ${zaps} da sua meta de ${goal} zaps..`}</p>
					{mistakes>0 && <p>{`Você também esqueceu de ${mistakes} flashcards..`}</p>}
					<p>Não desanime! Na próxima você consegue!</p>
					<button className='deck-button' onClick={() => reset()}>
						Tentar novamente
						<ion-icon name="play-forward"></ion-icon>
					</button>
				</div>
			)

			: (
				<div className="conclusion">
					<span>PARABÉNS! 🥳</span>
					<p>{`Você atingiu sua meta de ${goal} zaps!`}</p>
					{mistakes > 0 && <p>{`Porém, você esqueceu de ${mistakes} flashcards..`}</p>}
					<button className='deck-button' onClick={() => reset()}>
						Tentar novamente
						<ion-icon name="play-forward"></ion-icon>
					</button>
				</div>
			)
	}

	function reset() {
		setGoal(undefined);
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
				: (<div className="card">{cardStatus[status]()}</div>)
			}
		</>
	)
}
