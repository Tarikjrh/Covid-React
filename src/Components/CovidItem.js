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
        </React.Fragment>

    );
}

export default CovidItem;