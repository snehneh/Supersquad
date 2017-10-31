import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';



import rootReducer from './Reducers';
import {addCharacterById} from './Actions'

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store = {store}><App/></Provider>,
     document.getElementById('root'));