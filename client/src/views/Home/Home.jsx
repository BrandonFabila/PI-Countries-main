import style from './Home.module.css'
import { Nav, CardsCont } from '../../modules/index'


const Home = () => {
    return (
        <div className={style.Home}>
            <div>
                Home
            </div>
            <CardsCont />
            <Nav />
        </div>
    )
}

export default Home;