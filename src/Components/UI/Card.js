import "./Card.css"
const Card = (props) => {
    return (
        <div className={`dark-card ${props.classes}`}>
            {props.children}
        </div >
    );
}

export default Card;