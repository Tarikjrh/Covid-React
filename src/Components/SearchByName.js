import SelectedCountry from "./SelectedCountry";
import { useState } from "react";
import CountrySelector from "./CountrySelector";
import "./SearchByName.css";
import Card from "./UI/Card";
var content = <h1>Nothing selected</h1>;

const SearchByName = (props) => {
	const [selectedCountry, setSelectedCountry] = useState([]);
	const [found, setFound] = useState(false);

	function search(allCountries, countryWanted) {
		allCountries.forEach((country) => {
			if (country.name.toLowerCase() === countryWanted.toLowerCase().trim()) {
				// console.log("foundCountry", country);
				setFound(true);
				setSelectedCountry(country);
				// console.log("search=>", selectedCountry, found);
			}
		});

		if (!found) {
			content = <h1>Not Found</h1>;
			// console.log("notFound");
		}
		// console.log("search=>", selectedCountry, found);
	}

	function SubmitHandler(e) {

		setFound(false);
		setSelectedCountry(false);
		var countryWanted = e.value;

		search(props.data, countryWanted);
	}

	if (found) {
		content = <div>{found && <SelectedCountry selected={selectedCountry} />}</div>;
	}
	else if (selectedCountry.length === 0) {

		content = <h1 className="not-found">No Country Selected</h1>;
	}
	else if (selectedCountry === false) {

		content = <h1 className="not-found">Country data not available</h1>;
	}

	console.log(selectedCountry, found)
	// console.log(selectedCountry, found);
	return (
		<Card classes="col-12  mb-md-auto ">

			<h2 className="search-title">Search By Name</h2>
			<form action="">
				<CountrySelector onChange={SubmitHandler} />
			</form>
			{content}

		</Card>
	);
};

export default SearchByName;
