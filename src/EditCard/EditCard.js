import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import Form from "../AddCard/Form"

// Route = "/decks/:deckId/cards/:cardId/edit"

export default function AddCard() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState();
  const [card, setCard] = useState();

  useEffect(() => {
    const fetchDeck = async () => {
      const res = await api.readDeck(deckId);
      const filteredCard = res.cards.filter(
        (card) => card.id === parseInt(cardId)
      )[0];
      setDeck(res);
      setCard(filteredCard);
    };
    fetchDeck();
  }, [deckId, cardId, setDeck, setCard]);

  const title = `Edit Card ${cardId}`;

  ////////// Components //////////

  const Crumbs = () => {
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{`${deck.name}`}</a>
          </li>
          <li className="breadcrumb-item">{title}</li>
        </ol>
      </nav>
    );
  };

  const Header = () => {
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  };

  // MAIN RENDER
  return !card ? (
    "Loading..."
  ) : (
    <div className="container">
      <Crumbs />
      <Header />
      <Form />
    </div>
  );
}
