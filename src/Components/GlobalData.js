import { useState, useEffect } from "react";
import './GlobalData.css'
import world from '../world.png';
import Card from "./UI/Card";

var content = <h1>hello</h1>;
const GlobalData = () => {
	const [globalData, setGlobalData] = useState([]);

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
		} catch (error) { }
	}
	if (globalData.length > 0) {
		content = (
			<div>
				<h1>{globalData.total_cases}</h1>
				<h1>{globalData.new_cases}</h1>
				<h1>{globalData.total_recovered}</h1>
			</div>
		);
	}
	return (
		<Card classes="global-data ">
			{/* <div className="global-data "> */}
			<h1>World Stats</h1>
			<div className="row">
				<div className="col-5">
					{globalData && (
						<div className="">
							<h1 className="value ">{globalData.total_cases}
								<span>
									<h2 className="label">cases</h2>
								</span>
							</h1>
							<h1 className="value">{globalData.new_cases} <span>
								<h2 className="label">cases</h2>
							</span>
							</h1>
							<h1 className="value">{globalData.total_recovered} <span>
								<h2 className="label">cases</h2>
							</span>
							</h1>
						</div>
					)}
				</div>
				<div className="col-7 pr-0">
					<img src={world} alt="world image" className=" img-fluid" />
				</div>
			</div>

			{/* </div> */}
		</Card>
	);
};
export default GlobalData;
{/* {content} */ }
{/* <h1>{globalData.total_cases}</h1>
			<h1>{globalData.new_cases}</h1>
			<h1>{globalData.total_recovered}</h1> */}