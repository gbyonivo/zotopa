import * as Functions from '../../src/functions/validation';

describe('validateEmail', () => {
  it('should return null for correct email', () => {
    const actual = Functions.validateEmail('ivo@gmail.com');
    expect(actual).toEqual(null);
  });
  it('should return Invalid Email for incorrect email', () => {
    const actual = Functions.validateEmail('ivo.com');
    expect(actual).toEqual('Invalid Email');
  });
  it('should return Invalid Email for empty string', () => {
    const actual = Functions.validateEmail('');
    expect(actual).toEqual('Invalid Email');
  });
});

describe('validateName', () => {
  it('should return null for names above 3 chars', () => {
    const actual = Functions.validateName('ivoy');
    expect(actual).toEqual(null);
  });
  it('should return Invalid Name for names below 3 char', () => {
    const actual = Functions.validateName('iv');
    expect(actual).toEqual('name must be more than 3 chars');
  });
});

describe('validateAmount', () => {
  it('should return null foramount below max amount and more than 0', () => {
    const actual = Functions.validateAmount(700, 1000);
    expect(actual).toEqual(null);
  });
  it('should return Invalid Amount for string input', () => {
    const actual = Functions.validateAmount('iv', 8000);
    expect(actual).toEqual('Invalid Amount');
  });
  it('should return Invalid Amount for empty input', () => {
    const actual = Functions.validateAmount('', 8000);
    expect(actual).toEqual('Invalid Amount');
  });
  it('should return Invalid Amount for input < 1', () => {
    const actual = Functions.validateAmount(0, 8000);
    expect(actual).toEqual('Invalid Amount');
  });
  it('should return Invalid Amount for amount more than max amount', () => {
    const actual = Functions.validateAmount(90000, 8000);
    expect(actual).toEqual('Insufficient Funds');
  });
});

describe('validateForm', () => {
  it('should return null for all valid data', () => {
    const actual = Functions.validateForm({ name: 'ffdfsf', email: 'ivo@gmail.com', amount: 400 }, 5000);
    expect(actual).toMatchObject({ nameError: null, emailError: null, amountError: null });
  });
});