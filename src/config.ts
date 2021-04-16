import thunkMiddleware from 'redux-thunk';

import {createStore,
    combineReducers, applyMiddleware
} from 'redux';
//import bookReducer from './app/components/Books/redux/bookReducer';  import reducer
import bookReducer from './app/components/Reducer/bookReducer';
import custReducer from './app/components/Reducer/custReducer';

export default function config(){
    
    const rootReducer = combineReducers({
        br: bookReducer,
        cr: custReducer
    });

    console.log('creating store');
    const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
    console.log('store created');
    return store;
    
    
}
