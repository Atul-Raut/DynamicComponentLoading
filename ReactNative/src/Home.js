import React, { useState} from "react"
import './css/quasar-1.16.3.min.css'
import {createSearchParams, Link, useNavigate}	from 'react-router-dom'
import {TouchableOpacity} from 'react-native';

export default function Home() {
	const [input, setInput] = useState("Sample-0.1.json");
	const navigate = useNavigate();

	function handleSubmit() {
		console.log("handleSubmit called")
		navigate({
			pathname:"/loadComponants",
			search: createSearchParams({fileName:input}).toString()
		});
		

	}
	return(

		<div>
			<p>{input}</p>
			<input value={input} onInput={(e) => {setInput(e.target.value);}}></input>
			<TouchableOpacity
                onPress={() => handleSubmit()}
				style={{height: 35,
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 10,
					borderColor: "#009387",
					borderWidth: 1,
					backgroundColor: "#009387",
					marginTop: 15,
					margin: 15,
					padding: 10}}
              ><div style={{ color: "white", fontWeight: "bold" }}>
			  Load Component
			</div>
		  </TouchableOpacity>
		</div>
		
				  
	);
}