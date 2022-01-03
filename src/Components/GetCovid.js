import { useState, useEffect } from "react";
import "./GetCovid.css";
import MapComponent from "./Map/MapComponent";
import geojsonFeature from "../global2wcd.js";
import CurrentLocation from "./CurrentLocation";
import SearchByName from "./SearchByName";
import CovidTable from "./CovidTable";
import GlobalData from "./GlobalData";
import "./GetCovid.css";
import Navbar from "./NavBar/NavBar";

// var CountryList = []
// geojsonFeature.geojsonFeature.features.forEach(e => {
//     CountryList.push({ value: e.properties.name, label: e.properties.name })
// });

let url =
	"https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json";

function combineData2(ar1, ar2) {
	ar2.forEach((country2) => {
		var c2name = country2.name;
		ar1.forEach((country1) => {
			var c1name = country1.properties.name;

			if (c2name === c1name) {
				country1.properties.covidData = country2;
			}
		});
	});

	return ar1;
}

const GetCovid = () => {
	const [covid, setCovid] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [combinedData, setCombinedData] = useState({});

	useEffect(() => {
		fetchCovidInfo();
	}, []);

	async function fetchCovidInfo() {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const data = await response.json();

			const transformedData = data.features.map((data) => {
				return {
					name: data.attributes.Country_Region,
					cases: data.attributes.Confirmed,
					deaths: data.attributes.Deaths,
					lat: data.attributes.Lat,
					long: data.attributes.Long_,
					lastUpdate: data.attributes.Last_Update,
				};
			});

			setCovid(transformedData);

			setCombinedData(combineData2(geojsonFeature.geojsonFeature.features, transformedData));
		} catch (error) {
			setError(error.message);
		}

		setIsLoading(false);
	}

	let content = <p>NO DATA</p>;

	if (covid.length > 0) {
		content = (
			<div className="container mx-auto mt-5 pt-3">
				<div className="row pt-3 ">
					<div className="col-md-7 px-0 ">
						<MapComponent covid={geojsonFeature} />
					</div>
					<div className="col-md-5  row pt-sm-3 pt-md-0">
						{/* <div className="container"> */}
						<div className="row ml-3 ">
							<SearchByName data={covid} />
							<CurrentLocation data={covid} />

						</div>
						{/* </div> */}
					</div>
				</div>

				<div className="row pt-3">
					<div className="col-md-7 pt-md-0 pt-sm-3 ">
						<CovidTable data={covid} />
					</div>
					<div className="col-md-5 pt-md-0 pt-sm-3">
						<GlobalData />

					</div>
				</div>

			</div>
		);
	}
	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return <div>
		<Navbar />
		{content}
	</div>;

};

export default GetCovid;
