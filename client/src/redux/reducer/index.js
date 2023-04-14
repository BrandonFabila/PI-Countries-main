import {
    GET_ALLDB,
    GET_ACTIVITIES,
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
                countries: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case GET_COUNTRYBYID:
            return {

            }
        case FILTER_BYCONTINENT:
            const allCount = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCount : action.payload === ''
            return {
                ...state,
                countries: continentFiltered
            }
        case FILTER_BYACTIVITY:
            const allCountries = state.allCountries;
            const activityFiltered = action.payload === 'All' ? allCountries : allCountries.filter((e) => {
                if (typeof (e.activities) === 'string' ) return e.activities.includes(action.payload);
                if (Array.isArray(e.activities)) {
                    let act = e.activities.map(e => e.name)
                    return act.includes(action.payload)
                }
                return true;
            })
            return {
                ...state,
                allCountries: activityFiltered,
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