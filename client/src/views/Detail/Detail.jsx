import style from'./Detail.module.css'
import { Nav } from '../../modules/index'
import imgdef from '../../modules/data/imgdef.jpg'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';


const Detail = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // dispatch(getDetail(id))
    }, [dispatch, id]);

    const countryDet = useSelector((state) => state.detail)

    return (
        <div>
            <div className={style.contPrincipal}>
                <div className={style.imgCont}>
                    <img src={imgdef} alt={imgdef} className={style.imgn} />
                </div>
                <div className={style.imgCont} >
                    <h1>{`Pais, ID pais`}</h1>
                    <h2>{`Capital`}</h2>
                    <h3>{`Continente`}</h3>
                    <h3>{`Subregion`}</h3>

                </div>
            </div>
            
            <Nav />
        </div>
    )
};

export default Detail;