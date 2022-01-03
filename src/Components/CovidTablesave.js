import { useEffect, useState } from "react";
import React from "react";
import CovidItem from "./CovidItem";
import './CovidTable.css'

var content = <h1>nothing found</h1>;

const CovidTable = (props) => {
    var rank = 1;
    const [covidStats, setCovidStats] = useState([]);
    const [sortFeature, setSortFeature] = useState("cases");

    // console.log("cstats", covidStats);

    useEffect(() => {
        setCovidStats(props.data);
        content = props.data.map((country) => {
            return (
                <CovidItem
                    name={country.name}
                    rank={rank++}
                    key={country.name}
                    deaths={country.deaths.toLocaleString()}
                    cases={country.cases.toLocaleString()}></CovidItem>
            );
        });
    }, []);
    function mapTable() {
        return covidStats.map((country) => {
            return (
                <CovidItem
                    name={country.name}
                    rank={rank++}
                    key={country.name}
                    deaths={country.deaths.toLocaleString()}
                    cases={country.cases.toLocaleString()}></CovidItem>
            );
        });
    }
    useEffect(() => {
        // console.log("covid effect");
        content = covidStats.map((country) => {
            return (
                <CovidItem
                    name={country.name}
                    rank={rank++}
                    key={country.name}
                    deaths={country.deaths.toLocaleString()}
                    cases={country.cases.toLocaleString()}></CovidItem>
            );
        });
    }, [sortFeature, covidStats]);

    function selectHandler(e) {
        // console.log("e.target.value", e.target.value);
        setSortFeature(e.target.value);
        if (e.target.value == "name") {
            setCovidStats(

                covidStats.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                })
            );
        } else {
            setCovidStats(
                covidStats.sort(function (a, b) {
                    return parseInt(b[sortFeature]) - parseInt((a[sortFeature]));
                    // covidStats.sort(function (a, b) {
                    // 	return b[sortFeature] - a[sortFeature];
                })
            );
        }
    }

    return (
        <div className="global-rank test">
            <div className="row ">
                <h1 className="rank-header">Global rank
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
                            <th scope="coll">name</th>
                            <th scope="coll">cases</th>
                            <th scope="coll">deaths</th>
                        </tr>
                    </thead>
                    <tbody>{mapTable()}</tbody>
                </table>
            </div>
        </div>


    );
};

export default CovidTable;
