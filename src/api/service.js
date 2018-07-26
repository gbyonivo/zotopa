import userJSON from '../data/user';
import friendsJSON from '../data/friends';

export const fetchPersonalDetailsService = () => (userJSON);

export const fetchFriendsService = () => friendsJSON.friends;

export const sendService = (friendId, amount) => ({
  friendId,
  amount
});