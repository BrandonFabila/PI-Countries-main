import axios from 'axios';
export const GET_ALLDB = 'GET_ALLDB'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const GET_COUNTRYBYID = 'GET_COUNTRYBYID'
export const SEARCH_FAIL = 'SEARCH_FAIL'
export const FILTER_BYCONTINENT = 'FILTER_BYCONTINENT'
export const FILTER_BYACTIVITY = 'FILTER_BYACTIVITY'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const ORDER_BY_CRITERIA = 'ORDER_BY_CRITERIA'
export const FILTER_BY_CRITERIA = 'FILTER_BY_CRITERIA'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const FILTER_BY_NUMBER = 'FILTER_BY_NUMBER'


const servidor = 'http://localhost:3001/';


export const getAllDB = (name) => {
    //la funcion puede hacer coneccion
    return async function (dispatch) {
            try {
                if (name) {
                    return axios.get(`${servidor}countries?name=${name}`)
                        .then(res => dispatch({ type: GET_ALLDB, payload: res.data }))
                }
                //trae del servidor
                const serverData = await axios.get(`${servidor}countries`);
                //guarda en const
                const allCountries = serverData.data;
                //se almacena en la accion para que el reducer despache
                return dispatch({ type: GET_ALLDB, payload: allCountries, })
            } catch (err) {
                let fail = axios.get(`${servidor}countries?name=${name}`)
                    .then(res => res.data)
                    return dispatch({
                        type: SEARCH_FAIL,
                        payload: fail,
                    })
            }
    }
}



export function getActivities() {
    return async function (dispatch) {
        try {
            const serverData = await axios.get(`${servidor}activities`, {})
            const allActivities = serverData.data
            return dispatch({
                type: GET_ACTIVITIES,
                payload: allActivities,
            });
        } catch (err) {
            let fail = axios.get(`${servidor}actovities`)
            .then(res => res.data)
            return dispatch({
                type: SEARCH_FAIL,
                payload: fail
            })
        }
    }
}

export const postActivity =  (form) => {
    return async function (dispatch) {
        try {
            const serverPost = await axios.post(`${servidor}activities`, form)
            return serverPost
        } catch {

        }
    }
}

export const getCountryByID = (id) => {
    return async function (dispatch) {
        const serverData = await axios.get(`${servidor}countries/${id}`);
        const country = serverData.data;
        dispatch({ type: GET_COUNTRYBYID, payload: country })
    }
}


//filtros
export const filterByContinent = (payload) => {
    return {
        type: FILTER_BYCONTINENT,
        payload,
    }
}

export const filterByActivity = (dispatch) => {
    console.log(dispatch)
    return {
        type: FILTER_BYACTIVITY,
        dispatch
    }
}

export const filterByCriteria = (values) => {
    return { type: FILTER_BY_CRITERIA, values }
}

export function filterByNumber(values) {
    return {
        type: FILTER_BY_NUMBER,
        values
    }
}


//odeneamientos
export const sortByName = (payload) => {
    return {
        type: SORT_BY_NAME,
        payload,
    }
}


export const orderByCriteria = (value) => {
    return { type: ORDER_BY_CRITERIA, value }
}