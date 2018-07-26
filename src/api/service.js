export const fetchPersonalDetailsService = () => ({
  name: 'Orkuma Ivo',
  amout: '30000',
  id: '4'
});

export const fetchFriendsService = () => [
  {
    name: 'Orseer Ivo',
    id: '9'
  }, {
    name: 'Ngufan Ivo',
    id: '3'
  }
];

export const sendService = (friendId, amount) => ({
  friendId,
  amount
});