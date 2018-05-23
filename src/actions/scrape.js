export const SCRAPE_EMAIL = 'SCRAPE_EMAIL';
export const SCRAPE_SUCCESS = 'SCRAPE_SUCCESS';
export const SCRAPE_ERROR = 'SCRAPE_ERROR';
export const SUBMIT_FORM = 'SUBMIT_FORM';

import { checkEmail, scraper } from 'lib/scraper';

export const scrapingHasSucceed = (email) => ({
  type: SCRAPE_SUCCESS,
  email
});

export const scrapingHasErrored = (email) => ({
  type: SCRAPE_ERROR,
  email
});

export const scrapeEmail = (email) => {
  return (dispatch) => {
    scraper(email)
      .then(() => dispatch(scrapingHasSucceed(email)))
      .catch(() => dispatch(scrapingHasErrored(email)))
  }
}

export const shouldScrapeEmail = (email) => {
  return (dispatch, getState) => {
    const state = getState();
    if (!state.scraper.scrapSucceed) {
      dispatch(scrapeEmail(email));
    }
  }
};