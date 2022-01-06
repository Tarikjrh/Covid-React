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
				setFound(true);
				setSelectedCountry(country);
			}
		});
	}

	function SubmitHandler(e) {
		setFound(false);
		setSelectedCountry(false);
		var countryWanted = e.value;

		search(props.data, countryWanted);
	}

	if (found) {
		content = found && <SelectedCountry selected={selectedCountry} />

	}
	else if (selectedCountry.length === 0) {
		content = <h1 className="not-found">No Country Selected</h1>;
	}
	else if (selectedCountry === false) {
		content = <h1 className="not-found">Country data not available</h1>;
	}

	return (
		<Card classes="col-12  mb-md-auto ">
			<h2 className="search-title">Search By Name</h2>
			<form>
				<CountrySelector onChange={SubmitHandler} />
			</form>
			{content}

		</Card>
	);
};

export default SearchByName;
