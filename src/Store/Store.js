import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from './MidderWare';
import  Reducers,{initstate} from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
const Store = createStore(Reducers,initstate,composeWithDevTools(applyMiddleware(thunk,logger)));
export default Store;