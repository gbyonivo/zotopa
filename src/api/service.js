import data from '../data/user.json';
// import firebase from './firebase';

// export const fetchPersonalDetailsService = () => firebase
//   .get('personalDetails')
//   .then(data => data);

// export const fetchFriendsService = () => firebase
//   .get('friends')
//   .then(data => data);

// export const sendService = (transaction, availableFunds) => firebase
//   .set('personalDetails/availableFunds', availableFunds)
//   .then(() => firebase.push('personalDetails/transactions', transaction)
//     .then(data => ({ [data.name]: transaction })));

// uncomment above and comment below to use firebase when running on local.

export const fetchPersonalDetailsService = () => data.personalDetails;

export const fetchFriendsService = () => data.friends;

export const sendService = (transaction, availableFunds) => ({ [`transaction_${availableFunds}`]: transaction });