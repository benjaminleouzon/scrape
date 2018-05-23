import {
  SCRAPE_SUCCESS,
  SCRAPE_ERROR
} from 'actions/scrape.js';

const scrapeReducer = (state = {
  email: '',
  scrapSucceed: false
}, action) => {
  switch (action.type) {
    case SCRAPE_SUCCESS:
      return {
        scrapSucceed: true,
        email: action.email
      }
    case SCRAPE_ERROR:
      return {
        scrapSucceed: false,
        email: action.email
      }
    default:
      return state;
  }
}

export default scrapeReducer;