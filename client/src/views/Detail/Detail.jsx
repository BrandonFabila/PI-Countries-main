import style from'./Detail.module.css'
import { Nav } from '../../modules/index'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getCountryByID } from '../../redux/actions';


const Detail = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const country = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getCountryByID(id))
    }, [dispatch, id]);


    return (
        <div>
            <div className={style.contPrincipal}>
                <div className={style.dataCont} >
                    <h1 className={style.prin} >{`${country.name}, ${id}`}</h1>
                </div>
                <div className={style.imgCont}>
                    <img src={country.img} alt={country.id} className={style.imgn} />
                </div>
                <div className={style.dataCont} >
                    <h3 className={style.curenderbox} >{`Capital: ${country.capital}`}</h3>
                      {/* <hr color="#fff" size="2" width="50%" /> */}
                    <h2 className={style.curenderbox} >{`Continente: ${country.continente}`}</h2>
                      {/* <hr color="#fff" size="2" width="50%" /> */}
                    <h3 className={style.curenderbox} >{`Sub region: ${country.subregion}`}</h3>
                      {/* <hr color="#fff" size="2" width="50%" /> */}
                    <h3 className={style.curenderbox} >{`Area: ${country.area}m"`}</h3>
                      {/* <hr color="#fff" size="2" width="50%" /> */}
                    <h3 className={style.curenderbox} >{`Poblacion: ${country.poblacion}`}</h3>
                    
                    <div className={style.curenderbox} >
                      {/* <hr color="#fff" size="2" width="50%" /> */}
                      <h3 >Lenguajes: </h3>
                      {typeof country.languages === 'object' ? Object.entries(country.languages).map(([key, value]) => (
                          <ul key={key}>
                            <li>
                                <h3>{value}</h3>
                            </li>
                        </ul>
                        )) : <div>N/A</div> }
                    
                    </div>
                    
                    <div className={style.curenderbox} >
                      {/* <hr color="#fff" size="2" width="50%" /> */}
                      <h3>Monedas: </h3>
                      {typeof country.moneda === 'object'  ? Object.keys(country.moneda || {}).map((key) => (
                          <ul key={key}>
                          <li><h3>{`${country.moneda[key].symbol} ${country.moneda[key].name}`}</h3></li>
                        </ul>
                      )) : <div>N/A</div>}
                    </div>
                    
                    <div className={style.curenderbox} >
                      {/* <hr color="#fff" size="2" width="50%" /> */}
                        <h2>Actividades:</h2>
                        {Array.isArray(country.Activities) && country.Activities.length > 0 ? (
                          country.Activities.map((activity) => (

                            <div key={activity.id}>
                              <h3>No {activity.id}._ {activity.name}</h3>
                              <p>Dificultad: {activity.dificultad}</p>
                              <p>Duración: {activity.duracion}</p>
                              <p>Temporada: {activity.temporada}</p>
                            </div>
                          ))
                        ) : (
                          <h3>No hay actividades disponibles</h3>
                        )}
                    </div>


                </div>
            </div>
            
            <Nav />
        </div>
    )
};

export default Detail;