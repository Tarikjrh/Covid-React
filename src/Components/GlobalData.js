import { useState, useEffect } from "react";
import './GlobalData.css'
import world from '../world.png';
import Card from "./UI/Card";
const GlobalData = () => {
	const [globalData, setGlobalData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchCovidInfo();
	}, []);

	async function fetchCovidInfo() {
		try {
			const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
				method: "GET",
				headers: {
					"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
					"x-rapidapi-key": "dc242f04b2msh7b0cfd3a287e677p1545d0jsn00eab1fcb8c9",
				},
			});
			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const data = await response.json();
			setGlobalData(data);
			setIsLoading(false)
		}
		catch (error) {
			console.log(error)
			setGlobalData(null)
		}
	}


	return (
		<Card classes="global-data ">
			<h1>World Stats</h1>
			<div className="row">
				<div className="col-5">
					{globalData && (
						<div className="globe-info">
							<h1 className="value ">{isLoading ? <p>Loading...</p> : globalData.total_cases}
								<span>
									<h2 className="label">Total Cases</h2>
								</span>
							</h1>
							<h1 className="value">{isLoading ? <p>Loading...</p> : globalData.new_cases} <span>
								<h2 className="label">New Cases</h2>
							</span>
							</h1>
							<h1 className="value">{isLoading ? <p>Loading...</p> : globalData.total_recovered} <span>
								<h2 className="label">Total Recovered</h2>
							</span>
							</h1>
						</div>
					)}
					{!globalData && <h4>Error Getting data</h4>}
				</div>
				<div className="col-7 pr-0">
					<img src={world} alt="world image" className=" img-fluid" />
				</div>
			</div>

		</Card>
	);
};
export default GlobalData;
