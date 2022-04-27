import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import * as Button from "../Layout/resources/Buttons";
import * as api from "../utils/api";

// "/decks/:deckId"

export default function Deck() {
  const { deckId } = useParams();
  const history = useHistory();
  const [decks, setDecks] = useState();

  async function fetchDecks() {
    const deckList = await api.listDecks();
    setDecks(deckList);
  }

  useEffect(() => {
    fetchDecks();
  }, []);
  
  const filterDecks = () =>
    decks.filter((deck) => deck.id === parseInt(deckId))[0];

  const deleteDeck = () => {
    api.deleteDeck(deckId);
    console.log("deleted", deckId);
    history.push("/");
  };

  const Crumbs = () => {
    const filteredDeck = filterDecks();
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">{filteredDeck.name}</li>
        </ol>
      </nav>
    );
  };

  const DeckTitle = () => {
    const filteredDeck = filterDecks();

    return (
      <div>
        <div className="pb-2">
          <h5>{filteredDeck.name}</h5>
          <p>{filteredDeck.description}</p>
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
      api.deleteCard(cardId);
      console.log("deleted", cardId);
      fetchDecks()
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
    const filteredDeck = filterDecks();
    const cards = filteredDeck.cards;
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
  return !decks ? (
    "Loading"
  ) : (
    <div className="container">
      <Crumbs />
      <DeckTitle />
      <Cards />
    </div>
  );
}

//////////////////////////

// Create Card

// function CardCreate() {
//   const history = useHistory();
//   const { deckId } = useParams();
//   const [deck, setDeck] = useState({ cards: [] });

//   useEffect(() => {
//     readDeck(deckId).then(setDeck);
//   }, [deckId]);

//   function submitHandler(card) {
//     createCard(deckId, card);
//   }

//   function doneHandler() {
//     history.push(`/decks/${deckId}`);
//   }

// //////////////

//   function DeckCreate() {
//     const history = useHistory();

//     function submitHandler(deck) {
//       createDeck(deck).then((savedDeck) =>
//         history.push(`/decks/${savedDeck.id}`)
//       );
//     }
