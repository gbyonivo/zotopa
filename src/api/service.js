export const fetchPersonalDetailsService = () => ({
  name: 'Orkuma Ivo',
  amout: '30000'
});

export const fetchFriendsService = () => [
  {
    name: 'Orseer Ivo'
  }, {
    name: 'Ngufan Ivo'
  }
];

export const sendService = (friendId, amount) => ({
  friendId,
  amount
});