import {
    GET_COUNTRIES,
    SEARCH_FAIL,
} from '../actions/index.js'

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: [],
    loader: true
}

function rootReducer ( state = initialState, action ) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                detail: []
            }
        case SEARCH_FAIL:
            return {

            }
        default: 
            return state
    }
}

export default rootReducer