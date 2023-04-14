import style from './CardsCont.module.css'
import { Card } from '../index.js'
import { useSelector } from 'react-redux'
import Paginado from '../../views/Home/Paginado/Paginado';
import { useState } from 'react';

const CardsCont = () => {

    //almaceno data gracias a useSelector que busca allCountries en estado global
    const allCountries = useSelector( state => state.countries)
    
    //paginado
    const [countriesPerPage /*_setDogCurrentPerPage*/] = useState(10);
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries ? allCountries.slice(indexOfFirstCountry, indexOfLastCountry) : [];
    const [, setOrden] = useState('')
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const largoAllCountries = Array.isArray(allCountries) ? allCountries.length : 10
    
    return (
        <div className={style.Cont} >
            <div className={style.Cont} >
                <Paginado 
                    countriesPerPage={countriesPerPage} 
                    allCountries={largoAllCountries} 
                    paginado={paginado} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            {
                currentCountries?.map((country) => {
                    return (
                        <Card
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
                )})
            }
            
        </div>
    );
};

export default CardsCont;