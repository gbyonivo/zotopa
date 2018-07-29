const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

export const validateEmail = email => validEmail.test((email || '').toLowerCase()) ? null : 'Invalid Email';

export const validateName = name => name.length < 3 ? 'name must be more than 3 chars' : null;

export const validateAmount = (amount, maxAmount) =>
  amount < 1 || isNaN(amount) || amount === "" // eslint-disable-line
    ? 'Invalid Amount'
    : amount > maxAmount
      ? 'Insufficient Funds'
      : null;

export const validateForm = ({ name, email, amount }, maxAmount) => ({
  nameError: validateName(name),
  emailError: validateEmail(email),
  amountError: validateAmount(parseInt(amount, 10), maxAmount),
});