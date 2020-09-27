export const authEndPoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '4380cb0b311649b78deda8e9b3317169';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((result, item) => {
      const [ key, value ] = item.split('=');
      result[key] = decodeURIComponent(value);
      return result;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}`
  + `&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`
  + '&response_type=token&show_dialog=true';
