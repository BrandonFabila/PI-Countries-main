import style from '../styles/Landing.module.css'

const Landing = () => {
    return (
        <div className={style.Home}>
            <div className={style.conts} >
                <h1>Countries</h1>
                <h3>Explora el mundo</h3>
            </div>
            <div className={style.conts} >
                <button className={style.btn}>
                    Entrar
                </button>
            </div>
           
        </div>
    )
}

export default Landing;