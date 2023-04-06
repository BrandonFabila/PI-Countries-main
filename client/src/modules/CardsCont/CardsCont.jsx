import './CardsCont.css'
import { Card } from '../index.js'
import { data } from '../index.js'

const CardsCont = () => {
    
    return (
        <div>
            {
            data.map(country => {
                return <Card 
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