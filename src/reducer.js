export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  // TODO: remove
  item: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };
    default:
      return state;
  }
};

export default reducer;
