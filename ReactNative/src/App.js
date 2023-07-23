import React, { useState} from "react"
import './css/quasar-1.16.3.min.css'
import DynamicComponent from "./DynamicComponent"
import { Route, Routes } from 'react-router-dom';
import Home from './Home'

export default function App() {
	const [input, setInput] = useState("");
	return(
		<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/loadComponants" element={<DynamicComponent />} />
		</Routes>
    </div>
	);
}