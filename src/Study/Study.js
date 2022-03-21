import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flipper from "./Flipper";
import * as api from "../utils/api";

// Route = "/decks/:deckId"

export default function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState()

  useEffect(() => {
    const fetchDeck = async () => {
    const res = await api.readDeck(deckId)
    setDeck(res)
    }
    fetchDeck()
  }, [deckId])

  const Crumbs = () => {
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{deck.name}</a>
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
          <h3>{`Study: ${deck.name}`}</h3>
        </div>
      </div>
    );
  };

  const NotEnough = () => {

    return (
      <div className="p-3 alertcontainer mb-2 border rounded">
        <div><h2>Not enough cards.</h2></div>
        <div>{`You need at least 3 cards to study. There are ${deck.cards.length} cards in this deck.`}</div>
      </div>
    )
  }

  const Output = () => {
    return ((
    (deck.cards.length > 2) ? 
    <div>
      <Crumbs deck={deck}/>
      <DeckTitle deck={deck}/>
      <Flipper cards={deck.cards} deck={deck}/>
    </div>
   : 
    <div>
      <Crumbs deck={deck}/>
      <DeckTitle deck={deck}/>
      <NotEnough deck={deck}/>
    </div>
  ))}

  // MAIN RENDER
  return (!deck) ? "Loading" : <Output />
}