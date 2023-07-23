import React, { useState, useEffect } from "react"
import { Text, ActivityIndicator} from "react-native"
import {renderComponent} from './components/renderComponent'
import './css/quasar-1.16.3.min.css'
import {useSearchParams} from 'react-router-dom' 

export default function DynamicComponent() {
	const [useSearchParameters] = useSearchParams();
	let [isLoadding, setIsLoading] = useState(true);
	let [dataFetched, setDataFetched] = useState(false);
	let [isError, setIsError] = useState(false);
	let [error, setError] = useState();
	let [response, setResponse] = useState({});

	useEffect(() => {
		let url = "http://localhost:8080/getWidgetsByFileName/" + useSearchParameters.get("fileName");
		fetch(url)
		.then(res => res.json())
		.then((result)=>{
			setIsLoading(false);
			setResponse(result);
			setDataFetched(true);
		},
		(error)=>{
			setIsLoading(false);
			setError(error);
			setIsError(true);
		}
		)
	},[]);

	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}
	const getLoadContents = () => {
		if(isLoadding){
			return <ActivityIndicator size="large"></ActivityIndicator>
		}
		
		console.log(response);
		if(dataFetched && !isEmpty(response))
		{
			return renderComponent(response)
		}

		if(isError || (dataFetched && isEmpty(response))){
			if(dataFetched){
				return <Text>File not found at backend.</Text>
			}else{
				return <Text>{error}</Text>
			}
		}
	};

	return(
		<div>
			<div>{useSearchParameters.get("fileName")}</div>
			{
				getLoadContents()
			}
			
		</div>
	);
}