import mainReducer from './reducer';
import { createStore } from 'redux';

const store = createStore(mainReducer);

export default store;
