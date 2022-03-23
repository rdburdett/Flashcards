import * as api from "./api";

const fetchDeck = async (setDeck, deckId) => {
  const res = await api.readDeck(deckId);
  setDeck(res);
};

export default fetchDeck;
