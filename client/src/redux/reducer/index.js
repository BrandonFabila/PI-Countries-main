import {
    GET_ALLDB,
    GET_COUNTRYBYID,
    FILTER_BYCONTINENT,
    FILTER_BYACTIVITY,
    SEARCH_FAIL,
} from '../actions/index.js'

//determina estado incial
const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: [],
    loader: true
}

//crea reducer
function rootReducer ( state = initialState, action ) {
    switch (action.type) {
        case GET_ALLDB:
            return {
                ...state,
                allCountries: action.payload,
            }
        case GET_COUNTRYBYID:
            return {

            }
        case FILTER_BYCONTINENT:
            return {

            }
        case FILTER_BYACTIVITY:
            return {
                
            }    
        case SEARCH_FAIL:
            return {

            }
        default: 
            return {
                ...state,
            }
    }
}

export default rootReducer;