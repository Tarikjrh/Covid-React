import './MapInfo.css'

const MapInfo = (props) => {
    return (
        <div>
            {!props.covidInfo.name && (
                <div className="hover-info">Hover over an Area</div>
            )}
            {props.covidInfo.name && (
                <div className="info">
                    <h4>Global Covid Cases</h4>
                    <b className='country-name'> {props.covidInfo.name} </b>
                    <p className='country-info'> {props.covidInfo.cases ? props.covidInfo.cases.toLocaleString() + " Cases " : "no data available"}
                        <span>
                            <br />
                            {props.covidInfo.deaths ? props.covidInfo.deaths.toLocaleString() + " Deaths " : "no data available"}
                        </span>
                    </p>


                </div >
            )}
        </div>
    );
}

export default MapInfo;