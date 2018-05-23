import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { push } from 'react-router-redux';
import { scraper, checkout } from '../actions';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    {label && <label>{label}</label>}
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>
);

let CheckoutForm = (props) => {
  const { valid, submitting, dispatch, scrapSucceed, values } = props;

  const handleSubmit = (e) => {
      dispatch(checkout.submitForm(values.email, values.name));
      dispatch(push('/thankyou'));
  };

  const handleBlurEmailInput = (e) => {
    dispatch(scraper.shouldScrapeEmail(e.target.value));
  };

  return (
    <div className="panel">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Checkout</h1>
        <div className="form-field">
          <label htmlFor="name">Name<sup>*</sup></label>
          <Field name="name" component={renderField} type="text"/>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email<sup>*</sup></label>
          <Field name="email" component={renderField} type="email" onBlur={handleBlurEmailInput}/>
        </div>
        <div className="form-field">
          <input className="button" type="submit" value="Submit" disabled={!valid || submitting}/>
        </div>
        <small>All fields are mandatory</small>     
      </form>
    </div>
  )
}

const selector = formValueSelector('checkout');

const mapStateToProps = (state) => {
  return {
    scrapSucceed: state.scraper.scrapSucceed,
    values: selector(state, 'email', 'name')
  }
};

CheckoutForm = connect(mapStateToProps)(CheckoutForm);

export default reduxForm({
  form: 'checkout',
  validate
})(CheckoutForm);