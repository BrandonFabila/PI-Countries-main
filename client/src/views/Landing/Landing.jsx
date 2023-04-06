import style from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className={style.Home}>
            <div className={style.conts} >
                <h1>Countries Tour</h1>
                <h3>Explora el mundo en un solo lugar</h3>
            </div>
            <div className={style.conts} >
                <Link to='/home' >
                    <button className={style.btn} >
                        Entrar
                    </button>
                </Link>
            </div>
           
        </div>
    )
}

export default Landing;