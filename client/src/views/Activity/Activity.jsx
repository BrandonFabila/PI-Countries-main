import style from './Activity.module.css'
import { Nav } from '../../modules/index'
import Form from './Form/From'


const Activity = () => {
    return (
        <div className={style.contPrincipal}>
            <h1>
                Crea una actividad
            </h1>
            <Form />
            <Nav />
        </div>
    )
};

export default Activity;