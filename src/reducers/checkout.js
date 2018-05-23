import {
  FORM_SUBMIT
} from 'actions/checkout.js';

const checkoutReducer = (state = {
  email: '',
  name: '',
  formSubmitted: false
}, action) => {
  switch (action.type) {
    case FORM_SUBMIT:
      return {
        email: action.email,
        name: action.name,
        formSubmitted: true
      }
    default:
      return state;
  }
}

export default checkoutReducer;