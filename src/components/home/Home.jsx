import logo from '../../assets/img/Logo.png'

export default function Home({setComponent, goal, setGoal}){

	return (
		<>
			<img src={logo} alt="logo ZapRecall" />
			<input 
				type="text"
				placeholder="Sua meta de zaps"
				onChange={(event)=> setGoal(event.target.value)}
				value={goal}
			/>
			<button onClick={() => setComponent('deck01')} > deck01 </button>
			<button onClick={() => setComponent('deck02')} > deck02 </button>
		</>
	);
}