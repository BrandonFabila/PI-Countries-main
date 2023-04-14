import style from './Card.module.css'

const Card = (props) => {
    
    return (
        <div className={style.cardCont} >
            <a className={style.images} href={`/detail/${props.id}`} >
                <img  className={style.flag} src={props.img} alt={props.name} />
                <h3>{`${props.name} <`} <span className={style.continente}>{`> ${props.continente}`}</span></h3>
                <h4>{}</h4>
            </a>
        </div>
    );
};

export default Card;
