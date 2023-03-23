import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initinalState ={};

const middleware = [thunk]
const store = createStore(
    rootReducer,
    initinalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store