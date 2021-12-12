import { useState } from "react";
import "./assets/css/reset.css"
import "./assets/css/style.css";
import Main from "./components/main/Main";
import Home from "./components/home/Home";

export default function App(){
const [component, setComponent] = useState('home');

	return(
		<>
			{
				component==='home' 
				? <Home setComponent={setComponent}/> 
				: <Main component={component} setComponent={setComponent}/>
			}
		</>
	)
}