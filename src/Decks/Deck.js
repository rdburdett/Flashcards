import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import * as Button from "../Layout/resources/Buttons";
import * as api from "../utils/api";

// Route = "/decks/:deckId"

export default function Deck() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState();

  useEffect(() => {
    const fetchDeck = async () => {
      const res = await api.readDeck(deckId);
      setDeck(res);
    };
    fetchDeck();
  }, [deckId]);

  const deleteDeck = () => {
    if (
      window.confirm(
        "Delete this deck? \n\n You will not be able to recover it."
      )
    ) {
      api.deleteDeck(deckId);
      console.log("Deleted deck:", deckId, deck.name);
      history.push("/");
    } else console.log("Cancelled");
  };

  ////////// Components //////////

  const Crumbs = () => {
    // const filteredDeck = filterDecks();
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">{deck.name}</li>
        </ol>
      </nav>
    );
  };

  const DeckTitle = () => {
    return (
      <div>
        <div className="pb-2">
          <h5>{deck.name}</h5>
          <p>{deck.description}</p>
        </div>

        <Link to={`/decks/${deckId}/edit`}>
          <Button.Edit />
        </Link>

        <Link to={`/decks/${deckId}/study`}>
          <Button.Study />
        </Link>

        <Link to={`/decks/${deckId}/cards/new`}>
          <Button.AddCard />
        </Link>

        <Button.Trash onClick={deleteDeck} />
      </div>
    );
  };

  const CardTemplate = ({ card, cardId }) => {
    const deleteCard = () => {
      if (
        window.confirm(
          "Delete this card? \n\n You will not be able to recover it."
        )
      ) {
        api.deleteCard(cardId);
        const fetchDeck = async () => {
          const res = await api.readDeck(deckId);
          setDeck(res);
        };
        fetchDeck();
      } else console.log("Cancelled");
    };

    return (
      <div>
        <div className="row p-3">
          <div className="col">{card.front}</div>
          <div className="col">{card.back}</div>
        </div>
        <div className="float-right">
          <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
            <Button.Edit />
          </Link>
          <Button.Trash onClick={deleteCard} />
        </div>
      </div>
    );
  };

  const Cards = () => {
    const cards = deck.cards;
    const listOfCards = cards.map((card) => {
      return (
        <li className="list-group-item" key={card.id}>
          <CardTemplate card={card} cardId={card.id} />
        </li>
      );
    });

    return (
      <div className="mt-4">
        <h2>Cards</h2>
        <ul className="list-group">{listOfCards}</ul>
      </div>
    );
  };

  // MAIN RENDER
  return !deck ? (
    "Loading"
  ) : (
    <div className="container">
      <Crumbs />
      <DeckTitle />
      <Cards />
    </div>
  );
}
