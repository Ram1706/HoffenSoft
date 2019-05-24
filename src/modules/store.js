
import {createStore,applyMiddleware} from 'redux';
import reducers  from './reducer';
import logger from 'redux-logger';
export default function configureStore(initialState)
{
    const store=createStore(reducers,initialState,applyMiddleware(logger));
    return store;
}