import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../Reducers'

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

export default store
