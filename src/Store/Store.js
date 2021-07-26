import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from './MidderWare';
import  Reducers,{initstate} from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, Reducers);
const Store = createStore(myPersistReducer,initstate,composeWithDevTools(applyMiddleware(thunk,logger)));
//const Store = createStore(Reducers,initstate,composeWithDevTools(applyMiddleware(thunk,logger)));
export const persistor = persistStore(Store);
export default Store;