import { createStore, applyMiddleware, compose } from 'redux'
//middleware 
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer/index.js'

//si se tiene instalado compose de reduxdevtools se usa ese y si no el compose de redux comun
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))//poder hacer peticiones a un server
);

export default store;