
import {legacy_createStore,combineReducers, applyMiddleware, compose} from "redux";
import { reducer as AppReducer } from "../Reducer/AppReducer/reducer";
import {reducer as AuthReducer} from "../Reducer/AuthReducer/reducer";

const rootReducer = combineReducers({AppReducer,AuthReducer})

//store
//next->go to the next middleware if avaliable , else go to the reducer function
//action-> action object that we get from the dispatch method.

//keep track of the api calls made
//analytics

const logger1= (store)=>next=>action=>{
    console.log("Inside logger1-a",action)
    const val=next(action)
    console.log("Inside logger1-b",val)
    return val;
}

const logger2= (store)=>next=>action=>{
    console.log("Inside logger2-a",action)
    const val=next(action)
    console.log("Inside logger2-b",val)
    return val;
}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(logger1,logger2))
    );

export {store};
