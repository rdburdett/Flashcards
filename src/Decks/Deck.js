import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import * as Button from "../Layout/resources/Buttons";
import * as api from "../utils/api";
// "/decks/:deckId"


export default function Deck({ decks }) {
  const { deckId, cardId } = useParams();
  const history = useHistory()
  // const url = useLocation()
  // const [deckState, setDeckState] = useState()
  // const [filteredDeck, setFilteredDeck] = useState(decks)

  // useEffect(() => {
  //   async function fetchDecks() {
  //     const deckList = await api.listDecks()
  //     setDeckState(deckList)
  //     console.log(deckList)
  //   }
  //   fetchDecks()
  //   console.log(deckState)

  const filteredDeck = (decks.filter((deck) => deck.id === parseInt(deckId))[0]);

  // }, [url])

  
  const deleteDeck = () => {
    api.deleteDeck(deckId)
    console.log("deleted", deckId)
    history.push("/")
  }
  const deleteCard= (id) => {
    console.log("hi", id)
  }

  const Crumbs = () => {
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
    
    // const deleteHandler = (e) => {
    //   e.preventDefault();
    //   api.deleteDeck(deckId)
    //   console.log("Deleted", deckId);
    // };

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

  const CardTemplate = ({ card }) => {
    const deleteHandler = (e) => {
      e.preventDefault();
      console.log("Deleted", card.id);
      deleteCard(card.id)
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
    const cards = filteredDeck.cards;
    const listOfCards = cards.map((card) => {
      return (
        <li className="list-group-item" key={card.id}>
          <CardTemplate card={card} />
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
  return (!filteredDeck) ? "Loading" : (
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
