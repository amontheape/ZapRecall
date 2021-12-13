import logo from '../../assets/img/Logo.png'
import {decks} from '../../data/decks'

export default function Home({setComponent, goal, setGoal}){
	const keys = Object.keys(decks);

	return (
		<>
			<img className='main-logo' src={logo} alt="logo ZapRecall" />
			<input 
				className='goal-input'
				type="text"
				placeholder="Sua meta de zaps"
				onChange={(event)=> setGoal(event.target.value)}
				value={goal}
			/>

			{
				keys.map((key)=>(
					<button className='deck-button' onClick={() => setComponent(key)} >
						{`Praticar ${decks[key].title}`}
						<ion-icon name="play-forward"></ion-icon>
					</button>
				))
			}
		</>
	);
}