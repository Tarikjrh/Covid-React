import './SelectedCountry.css'
const SelectedCountry = (props) => {
    return (
        <div className="selected-country-info">

            {props.selected &&
                <div className="content">
                    <h3 className="value">{props.selected.name}
                        <span>
                            <h4 className='label'>Country</h4>
                        </span>
                    </h3>
                    <h3 className="value"> {props.selected.cases.toLocaleString()}
                        <span>
                            <h4 className='label'>Cases</h4>
                        </span>
                    </h3>
                    <h3 className="value">{props.selected.deaths.toLocaleString()}
                        <span>
                            <h4 className='label'>Deaths</h4>
                        </span>
                    </h3>
                </div>
            }

        </div>);
}

export default SelectedCountry;