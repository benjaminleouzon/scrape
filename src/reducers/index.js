import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import checkoutReducer from './checkout';
import scrapeReducer from './scrape';

export default combineReducers({
  scraper: scrapeReducer,
  checkout: checkoutReducer,
  form: formReducer,
  router: routerReducer
});