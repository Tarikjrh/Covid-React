import React, { Component } from "react";
import Select from "react-select";
import "./CountrySelector.css";
import countryList from "./countryList";


const CountrySelector = (props) => {
	function SubmitHandler(e) {
		// e.preventDefault()
		props.onChange(e);
	}

	return (

		<Select options={countryList} className="country-selector" onChange={SubmitHandler} />
	);
};

export default CountrySelector;
