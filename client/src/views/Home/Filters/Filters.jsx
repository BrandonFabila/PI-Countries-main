import { useDispatch, useSelector } from 'react-redux';
import { getActivities, filterByCriteria, orderByCriteria } from '../../../redux/actions';
import styles from './Filters.module.css';
import { useState, useEffect } from 'react';

const Filters = () => {

    const { allCountries, activities } = useSelector(state => ({
		allCountries: state.allCountries,
		activities: state.activities
	}))
	const largoallcountries = 250
	const [ filters, setFilters ] = useState({})
	const dispatch = useDispatch()
	const handleFilter = (e) => {
		setFilters({ ...filters, [ e.target.name ]: e.target.value })
	}
	const handleOrder = (e) => {
		dispatch(orderByCriteria({ [ e.target.name ]: e.target.value }))
	}
	useEffect(() => {
		document.getElementById('continent').value = '0'
		document.getElementById('activity').value = '0'
	}, [ largoallcountries ])
	useEffect(() => {
		dispatch(getActivities())
	}, [ dispatch ])
	useEffect(() => {
		document.getElementById('order').value = '0'
		dispatch(filterByCriteria(filters))
	}, [ dispatch, filters ])

    return (
        <div className={styles.container}>
			<form className={styles.contPrincipal}>
				<div className={styles.cuSel}>
					<select className={styles.select} name='continent' id='continent' onChange={handleFilter}>
						<option value='0'>Filtra por Continente</option>
						<option value='Africa'>Africa</option>
						<option value='Antarctica'>Antarctica</option>
						<option value='Asia'>Asia</option>
						<option value='Europe'>Europe</option>
						<option value='North America'>North America</option>
						<option value='Oceania'>Oceania</option>
						<option value='South America'>South America</option>
					</select>
				</div>
				<div className={styles.cuSel}>
					<select className={styles.select} name='activity' id='activity' onChange={handleFilter}>
						<option value='0'>Filtra por Actividad</option>
						{activities?.map(a => {
							return <option key={a.id} value={a.id}>{a.name}</option>
						})}
					</select>
				</div>

				<div className={styles.cuSel}>
					<select className={styles.select} name="number" id="number" onChange={handleFilter} >
						<option value="0">Filtra por 30M de habitantes</option>
						<option value="yes">yes</option>
					</select>
				</div>

				<div className={styles.cuSel}>
					<select className={styles.select} name='order' id='order' onChange={handleOrder}>
						<option value='0'>Ordenar por:</option>
						<option value='a-z'>A a Z</option>
						<option value='z-a'>Z a A </option>
						<option value='min-max'>menor Poblacion</option>
						<option value='max-min'>mayor Poblacion</option>
					</select>
				</div>

				
                
			</form>
		</div>
    )
 }

 export default Filters;