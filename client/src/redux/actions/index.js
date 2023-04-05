import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SEARCH_FAIL = 'SEARCH_FAIL'

const servidor = 'http://localhost:3001/';

export function getCountries(name) {
    return async function (dispatch) {
        try {
            if (name) {
                return axios.get(`${servidor}countries?name=${name}`)
                    .then(res => dispatch({ type: GET_COUNTRIES, payload: res.data}))
                    .catch(err => dispatch({ type: GET_COUNTRIES, payload: err.data}))
            }
            let json = await axios.get(`${servidor}countries`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            })
        } catch ( err ) {
            let fail = axios.get(`${servidor}countries?name=${name}`)
                .then(res => res.data)
            return dispatch({
                type: SEARCH_FAIL,
                payload: fail,
            })
        }
    }
}