import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

let ThankYou = (props) => {
  const { dispatch, scrapSucceed, name, email } = props;

  const handleBackClick = (e) => {
    dispatch(push('/'));
  };

  return (
    <div className="panel" style={{ textAlign: 'center' }}>
      <h1>Thank you</h1>
      <h2>{name}</h2>
      <small><a onClick={handleBackClick}>Back</a></small>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    scrapSucceed: state.scraper.scrapSucceed,
    name: state.checkout.name,
    email: state.checkout.email
  }
};

ThankYou = connect(mapStateToProps)(ThankYou);

export default ThankYou;
