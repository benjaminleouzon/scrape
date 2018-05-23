export const FORM_SUBMIT = 'FORM_SUBMIT';

export const submitForm = (email, name) => ({
  type: FORM_SUBMIT,
  email,
  name
});
