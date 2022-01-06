import { useEffect, useState } from "react";
import React from "react";
import CovidItem from "./CovidItem";
import './CovidTable.css'
import Card from "./UI/Card";

var content = <h1>nothing found</h1>;

const CovidTable = (props) => {
	const [sortFeature, setSortFeature] = useState("cases");

	const [covidStats, setCovidStats] = useState(props.data.sort(function (a, b) {
		return parseInt(b[sortFeature]) - parseInt((a[sortFeature]));
	}));


	var rank = 1;
	function selectHandler(e) {
		// sort table based on field 

		setCovidStats(
			covidStats.sort(function (a, b) {
				return parseInt(b[sortFeature]) - parseInt((a[sortFeature]));
			})
		);

		setSortFeature(e.target.value);

	}

	return (
		<Card >
			<div className="row  px-3">
				<h1 className="rank-header ">Global Rank
					<span >
						<h2 className="sort-feature">
							By {sortFeature}
						</h2>
					</span>
				</h1>

				<form action="" className="ml-auto">
					<select className="custom-select" onChange={selectHandler}>
						<option value="cases">cases</option>
						<option value="deaths">deaths</option>
					</select>
				</form>
			</div>
			<div className="covidTable">
				<table className="table table-hover ">
					<thead>
						<tr>
							<th scope="coll">#</th>
							<th scope="coll">Name</th>
							<th scope="coll">Cases</th>
							<th scope="coll">Deaths</th>
						</tr>
					</thead>
					<tbody>{
						covidStats.map((country) => {
							return (
								<CovidItem
									name={country.name}
									rank={rank++}
									key={country.name}
									deaths={country.deaths.toLocaleString()}
									cases={country.cases.toLocaleString()}></CovidItem>
							);
						})}</tbody>
				</table>
			</div>
		</Card>


	);
};

export default CovidTable;
