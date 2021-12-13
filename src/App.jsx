import { useState } from "react";
import "./assets/css/reset.css"
import "./assets/css/style.css";
import Main from "./components/main/Main";
import Home from "./components/home/Home";

export default function App(){
const [component, setComponent] = useState('home');
const [goal, setGoal] = useState();

	return(
		<>
			{
				component==='home' 
				? <Home setComponent={setComponent} goal={goal} setGoal={setGoal}/> 
				: <Main component={component} setComponent={setComponent} goal={goal} setGoal={setGoal}/>
			}
		</>
	)
}