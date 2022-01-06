import { useState, useEffect } from "react";
import SelectedCountry from "./SelectedCountry";
import './CurrentLocation.css'
import Card from "./UI/Card";

var content = "";
const CurrentLocation = (props) => {
	// const [ipInfo, setIpInfo] = useState([]);
	const [locationData, setLocationData] = useState({ name: "", cases: 0, deaths: 0 });
	const [found, setFound] = useState(false);


	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			fetchIpInfo();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	function search(allCountries, countryWanted) {
		allCountries.forEach((country) => {
			if (country.name.toLowerCase() === countryWanted.toLowerCase().trim()) {
				setFound(true);
				setLocationData(country);
			}
		});

	}

	async function fetchIpInfo() {
		try {
			const response = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=ceeeae247e48442faca2e96b7fb8d483")
				.then((resp) =>
					resp.json()
				)
				.then((userLocationData) => {
					// setIpInfo(userLocationData.country.name);
					search(props.data, userLocationData.country.name);
				})

			if (!response.ok) {
				throw new Error("Something went wrong");
			}


		} catch (error) {
		}
	}
	if (found) {
		content = found && <SelectedCountry selected={locationData} />
	}
	else {
		content = <h1>loading...</h1>
	}



	return (
		<Card classes="col-12 mt-md-auto">

			< h2 className="search-title" > Current Location</ h2>
			{content}

		</Card>
	);
};

export default CurrentLocation;
