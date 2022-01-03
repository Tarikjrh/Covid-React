import React from "react";

const CovidItem = (props) => {
    return (
        <React.Fragment>


            <tr data-toggle="collapse" data-target={`#${props.name}`} aria-expanded="false" aria-controls={`#${props.name}`}>
                <td> {props.rank}</td>
                <td> {props.name}</td>
                <td> {props.cases}</td>
                <td> {props.deaths}</td>
            </tr>

            {/* <table className="collapse innerTable" id={`${props.name}`}>


                    <thead role="rowgroup" >
                        <tr role="row" >
                            <th className="" role="columnheader">#</th>
                            <th className="" role="columnheader">Country Name</th>
                            <th className="" role="columnheader">Total Cases</th>
                            <th className="" role="columnheader">New Cases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr role="row" >
                            <td className="innerTableValue"> {props.rank}</td>
                            <td className="innerTableValue"> {props.name}</td>
                            <td className="innerTableValue"> {props.cases}</td>
                            <td className="innerTableValue"> {props.deaths}</td>

                        </tr>
                    </tbody>



                </table> */}


        </React.Fragment>

    );
}

export default CovidItem;