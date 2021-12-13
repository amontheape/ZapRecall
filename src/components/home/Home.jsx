import {useState} from 'react';
import logo from '../../assets/img/Logo.png'
import {decks} from '../../data/decks'

export default function Home({setComponent, goal, setGoal}){
	const keys = Object.keys(decks);
	const [error,setError] = useState(false);

	function handleGoal(key) {
		if(goal<=0 || goal>8 || goal === undefined){
			setError(true);
		} else {
			 setError(false);
			 setComponent(key);
		}
	}

	return (
		<>
			<img className='main-logo' src={logo} alt="logo ZapRecall" />
			<input 
				className='goal-input'
				type="number"
				placeholder="Sua meta de zaps"
				onChange={(event)=> setGoal(event.target.value)}
				value={goal}
			/>
			{error && <span className='error-span'> A meta deve ser um número entre 1 e 8</span>}

			{
				keys.map((key)=>(
					<button key={key} className='deck-button' onClick={() => handleGoal(key)} data-identifier="start-zap-recall">
						{`Praticar ${decks[key].title}`}
						<ion-icon name="play-forward"></ion-icon>
					</button>
				))
			}
		</>
	);
}