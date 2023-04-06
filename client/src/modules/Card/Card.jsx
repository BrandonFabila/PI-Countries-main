import './Card.css'

const Card = (props) => {
    
    return (
        <div>
            <img src={props.img} alt={props.name} />
            <h3>🔹{props.name}🔹</h3>
        </div>
    );
};

export default Card;