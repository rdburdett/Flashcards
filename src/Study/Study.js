import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flipper from "./Flipper";
import * as api from "../utils/api";
// Route = "/decks/:deckId"

export default function Study() {
  const { deckId } = useParams();
  const [decks, setDecks] = useState()

  useEffect(() => {
    async function fetchDecks() {
      const deckList = await api.listDecks()
      setDecks(deckList)
    }
    fetchDecks()
  }, [])

  const filterDecks = () => (decks.filter((deck) => deck.id === parseInt(deckId))[0]);

  const Crumbs = ({ filteredDeck }) => {
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

  const DeckTitle = ({ filteredDeck }) => {

    return (
      <div>
        <div className="pb-2">
          <h3>{`Study: ${filteredDeck.name}`}</h3>
        </div>
      </div>
    );
  };

  const NotEnough = ({ filteredDeck }) => {

    return (
      <div className="p-3 alertcontainer mb-2 border rounded">
        <div><h2>Not enough cards.</h2></div>
        <div>{`You need at least 3 cards to study. There are ${filteredDeck.cards.length} cards in this deck.`}</div>
      </div>
    )
  }

  const Output = () => {
    const filteredDeck = filterDecks()
    return ((
    (filteredDeck.cards.length > 2) ? 
    <div>
      <Crumbs filteredDeck={filteredDeck}/>
      <DeckTitle filteredDeck={filteredDeck}/>
      <Flipper cards={filteredDeck.cards} filteredDeck={filteredDeck}/>
    </div>
   : 
    <div>
      <Crumbs filteredDeck={filteredDeck}/>
      <DeckTitle filteredDeck={filteredDeck}/>
      <NotEnough filteredDeck={filteredDeck}/>
    </div>
  ))}

  // MAIN RENDER
  return (!decks) ? "Loading" : <Output />
}