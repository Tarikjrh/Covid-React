import './MapLegend.css'

let colors = [{
    color: "",
    value: ""
}]
const color0 = "#80ffdb";
const color1 = "#64dfdf";
const COLOR_2 = "#48bfe3";
const COLOR_3 = "#4ea8de";
const COLOR_4 = "#5390d9";
const COLOR_5 = "#5e60ce";
const COLOR_6 = "#6930c3";
const COLOR_7 = "#7400b8";

const MapLegend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": COLOR_7 }}>{parseInt(40000000).toLocaleString()} Cases</div>
            <div style={{ "--color": COLOR_6 }}>{parseInt(2000000).toLocaleString()}+</div>
            <div style={{ "--color": COLOR_5 }}>{parseInt(1000000).toLocaleString()}+</div>
            <div style={{ "--color": COLOR_4 }}>{parseInt(500000).toLocaleString()}+</div>
            <div style={{ "--color": COLOR_3 }}>{parseInt(100000).toLocaleString()}+</div>
            <div style={{ "--color": COLOR_2 }}>{parseInt(50000).toLocaleString()}+</div>
            <div style={{ "--color": color1 }}> {parseInt(10000).toLocaleString()}+</div>
            <div style={{ "--color": color0 }}>0</div>
        </div>
    );
}

export default MapLegend;