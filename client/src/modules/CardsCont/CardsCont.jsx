import style from './CardsCont.module.css'
import { Card } from '../index.js'
import { useSelector } from 'react-redux'

const CardsCont = () => {

    //almaceno data gracias a useSelector que busca allCountries en estado global
    const allCountries = useSelector( state => state.allCountries)
    
    
    return (
        <div className={style.Cont} >
            {
            //&& asegura de que no sea un rreglo vacio
            allCountries && allCountries.map(country => {
                return <Card
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    img={country.img}
                    continente={country.continente}
                    capital={country.capital}
                    subregion={country.subregion}
                    area={country.area}
                    poblacion={country.poblacion}
                    languages={country.languages}
                    moneda={country.moneda}
                    Activities={country.Activities}
                />
            })
            }
        </div>
    );
};

export default CardsCont;