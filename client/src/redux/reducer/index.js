import {
    GET_ALLDB,
    GET_ACTIVITIES,
    GET_COUNTRYBYID,
    FILTER_BYCONTINENT,
    FILTER_BYACTIVITY,
    SEARCH_FAIL,
    POST_ACTIVITY,
    ORDER_BY_CRITERIA,
    FILTER_BY_CRITERIA,
    SORT_BY_NAME,
    FILTER_BY_NUMBER,
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
                ...state,
                detail: action.payload, 
            }
        case FILTER_BYCONTINENT:
            const countriess = state.countries;
            return {
                ...state,
                countries: countriess.filter((country) => country.continent === action.payload )
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
        case SORT_BY_NAME:
            const sortedName = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                countries: sortedName,

            }
        case ORDER_BY_CRITERIA:
            if (action.value.order === 'a-z'){
                return {
                    ...state,
                    countries: [...state.countries].sort((a,b) => a.name.localeCompare(b.name))
                }
            } else if (action.value.order === 'z-a'){
                return {
                    ...state,
                    countries: [...state.countries].sort((a,b) => b.name.localeCompare(a.name))
                }
            } else if (action.value.order === 'min-max'){
                return {
                    ...state,
                    countries: [...state.countries].sort((a,b) => a.poblacion - b.poblacion)
                }
            } else if (action.value.order === 'max-min'){
                return {
                    ...state,
                    countries: [...state.countries].sort((a,b) => b.poblacion - a.poblacion)
                }
            }
            return {
                ...state,
                countries: [...state.countries]
            }

            case FILTER_BY_CRITERIA:
                let filtered = []
                let toFilter = [...state.countries]
                let refrestoFilter = [...state.allCountries]
                let continentValue = action.values.continent 
                let activityValue = action.values.activity
                let numberValue = action.values.number;
                console.log(continentValue)
                console.log(numberValue)
                
                let isFiltering = false
                if (continentValue && activityValue) {
                    isFiltering = true
                    filtered = refrestoFilter.filter(c => {
                        return (c.continente === continentValue && c.Activities.length !== 0 && c.Activities.some(a => a.id.toString() === activityValue) )
                    })
                    filtered = filtered.length ? filtered : [...state.allCountries]
                }
                if (numberValue && numberValue !== '0') {
                    isFiltering = true
                    filtered = toFilter.filter(c => {
                        return c.poblacion < 3000000
                    })
                    filtered = filtered.length ? filtered : [...state.allCountries]
                }
                if (continentValue && continentValue !== '0'){ // si es diferente a activity
                    isFiltering = true
                    filtered = toFilter.filter(c => {
                        return c.continente === continentValue
                    })
                    filtered = filtered.length ? filtered : [...state.allCountries]
                }
                if (activityValue && activityValue !== '0'){ // else
                    isFiltering = true
                    filtered = toFilter.filter(c => {
                        return c.Activities.length !== 0 && c.Activities.some(a => a.id.toString() === activityValue)
                    })
                    filtered = filtered.length ? filtered : [...state.allCountries]
                }
                return {
                    ...JSON.parse(JSON.stringify(state)),
                    countries: isFiltering ? filtered : state.allCountries,
                    error: isFiltering && !filtered.length ? {
                        message: "No countries found under selected criteria"
                    } : {}
                }
        case SEARCH_FAIL:
            return {

            }
        case POST_ACTIVITY:
            return {
                ...state
            }
        default: 
            return {
                ...state,
            }
    }
}

export default rootReducer;