import axios from 'axios';
import { popularGamesURL } from '../api';

// Action Creator

export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: { popular: popularGamesData.data.results },
  });
};
