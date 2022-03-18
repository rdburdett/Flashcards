import React from "react";
import { useParams } from "react-router-dom";
import Flipper from "./Flipper";

// Route = "/decks/:deckId"

export default function Study({ decks }) {
  const { deckId } = useParams();
  const filteredDeck = decks.filter((deck) => deck.id === parseInt(deckId))[0];

  const Crumbs = () => {
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{filteredDeck.name}</a>
          </li>
          <li className="breadcrumb-item">Study</li>
        </ol>
      </nav>
    );
  };

  const DeckTitle = () => {
    return (
      <div>
        <div className="pb-2">
          <h3>{`Study: ${filteredDeck.name}`}</h3>
        </div>
      </div>
    );
  };

  const NotEnough = () => {
    return (
      <div className="p-3 alertcontainer mb-2 border rounded">
        <div><h2>Not enough cards.</h2></div>
        <div>{`You need at least 3 cards to study. There are ${filteredDeck.cards.length} cards in this deck.`}</div>
      </div>
    )
  }

  const output = ((
    (filteredDeck.cards.length > 2) ? 
    <div>
      <Crumbs />
      <DeckTitle />
      <Flipper cards={filteredDeck.cards} />
    </div>
   : 
    <div>
      <Crumbs />
      <DeckTitle />
      <NotEnough />
    </div>
  ))

  // MAIN RENDER
  return output
}