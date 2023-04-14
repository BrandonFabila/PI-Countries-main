import style from './Home.module.css'
import { Nav, CardsCont  } from '../../modules/index'
import Head from './Head/Head'
import Foot from './Foot/Foot'
import Filters from './Filters/Filters'
import Paginado from './Paginado/Paginado'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllDB } from '../../redux/actions'

const Home = () => {
    const dispatch = useDispatch();
    //cuando se monta => dispatch
    useEffect( () => {
        dispatch(getAllDB())
    }, [dispatch])

    return (
        <div className={style.Home}>
            <Head />
            <Filters />
            <Paginado />
            <CardsCont />
            <Foot />
            <Nav />
        </div>
    )
}

export default Home;