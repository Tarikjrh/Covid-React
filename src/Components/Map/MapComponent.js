import { MapContainer, TileLayer, GeoJSON, } from "react-leaflet";
import { useState } from "react";
import MapInfo from "./MapInfo";
import MapLegend from "./MapLegend";

import "./MapComponent.css";

var mapRef;
// ADDING COLOR -------------------------------------------
function getColor(d) {
	return d > 40000000
		? "#7400b8"
		: d > 2000000
			? "#6930c3"
			: d > 1000000
				? "#5e60ce"
				: d > 500000
					? "#5390d9"
					: d > 100000
						? "#4ea8de"
						: d > 50000
							? "#48bfe3"
							: d > 10000
								? "#64dfdf"
								: "#80ffdb";
}

function style(feature) {
	return {
		fillColor: getColor(feature.properties.covidData.cases),
		weight: 1.5,
		opacity: 1,
		color: "black",
		fillOpacity: 0.7,
	};
}
const MapComponent = (props) => {
	const [covidInfo, setCovidInfo] = useState({});

	// ADDING INTERACTION -------------------------------------------
	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature,

		});
	}
	function zoomToFeature(e) {
		mapRef.fitBounds(e.target.getBounds());
		// mapRef.flyTo([35.82110070165024, 33.2774264592763], 5)

	}
	function highlightFeature(e) {
		var layer = e.target;

		// get info
		setCovidInfo({
			name: e.target.feature.properties.name,
			cases: e.target.feature.properties.covidData.cases,
			deaths: e.target.feature.properties.covidData.deaths
		});

		layer.setStyle({
			weight: 3,
			color: "white",
			fillOpacity: 0.7,
			fillColor: "white",
		});
		layer.bringToFront();
	}

	function resetHighlight(e) {
		setCovidInfo({ name: "" });
		e.target.setStyle(style(e.target.feature));
	}

	return (
		<div className="container-fluid">
			<MapContainer center={[0, 0]} zoom={1.3} scrollWheelZoom={false} whenReady={e => {
				mapRef = e.target;
			}}>
				<MapInfo covidInfo={covidInfo} ></MapInfo>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://api.mapbox.com/styles/v1/tarikjh/ckwzbwigw14b614pqjytuvvc4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFyaWtqaCIsImEiOiJja3d6OWRuY2EwZmwxMnpueWw0bzJsOHY5In0.n6bQCIi_caskJrELacqZQA"
				/>

				<GeoJSON
					key={Math.random}
					data={props.covid.geojsonFeature}
					style={style}
					onEachFeature={onEachFeature}
				/>
				<MapLegend />
			</MapContainer>
		</div >
	);
};

export default MapComponent;
