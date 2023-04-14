import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const id = props.id
    return (
        <div className={style.cardCont} >
            <Link to={`/detail/${id}`} >
                <img  className={style.flag} src={props.img} alt={props.name} />
                <h3>{`${props.name} <`} <span className={style.continente}>{`> ${props.continente}`}</span></h3>
                <h4>{}</h4>
            </Link>
        </div>
    );
};

export default Card;
