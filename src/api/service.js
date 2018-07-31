import FirebaseClient from '../lib/firebase-client';

const firebase = new FirebaseClient({
  url: 'https://zotopa-d8113.firebaseio.com/'
});

export const fetchPersonalDetailsService = () => firebase
  .get('personalDetails')
  .then(data => data);

export const fetchFriendsService = () => firebase
  .get('friends')
  .then(data => data);

export const sendService = (transaction, availableFunds) => firebase
  .set('personalDetails/availableFunds', availableFunds)
  .then(() => firebase.push('personalDetails/transactions', transaction)
    .then(data => ({ [data.name]: transaction })));