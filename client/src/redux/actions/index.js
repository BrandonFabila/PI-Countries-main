import axios from 'axios';
import { data } from '../../modules';

export const GET_ALLDB = 'GET_ALLDB'
export const GET_COUNTRYBYID = 'GET_COUNTRYBYID'
export const SEARCH_FAIL = 'SEARCH_FAIL'
export const FILTER_BYCONTINENT = 'FILTER_BYCONTINENT'
export const FILTER_BYACTIVITY = 'FILTER_BYACTIVITY'

const servidor = 'http://localhost:3001/';

/*
export const getAllDB = () => {
    //la funcion puede hacer coneccion
    return async function (dispatch) {
            //trae del servidor
            const serverData = await axios.get(`${servidor}countries`);
            //guarda en const
            const allCountries = serverData.data;
            //se almacena en la accion para que el reducer despache
            dispatch({ type: GET_ALLDB, payload: allCountries, })
    }
}*/

export const getCountryByID = (id) => {
    return async function (dispatch) {
        const serverData = await axios.get(`${servidor}countries/${id}`);
        const country = serverData.data;
        dispatch({ type: GET_COUNTRYBYID, payload: country })
    }
}

export const getAllDB = () => {
    return function (dispatch) {
        const allCountries = data;
        dispatch({ type: GET_ALLDB, payload: allCountries, })
        
    }
    
}

export const filterByContinent = (dispatch) => {
        dispatch({ type: FILTER_BYCONTINENT})
}

/*
export const filterByContinent = () => {
    return function (dispatch) {
        let filtered = [];
        let  isFiltering = false;
        if ()
    }
}*/

export const filterByActivity = (dispatch) => {
        dispatch({ type: FILTER_BYACTIVITY})
}