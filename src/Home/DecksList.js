import React, { useState, useEffect } from "react";
import DeckPreview from "../Home/DeckPreview";
import * as Button from "../Layout/resources/Buttons"
import * as api from "../utils/api";


// List of decks for Home page
function DecksList() {
  const [decks, setDecks] = useState()

  useEffect(() => {
    async function fetchDecks() {
      const deckList = await api.listDecks()
      setDecks(deckList)
    }
    fetchDecks()
  }, [])
  
  // Build array of deck preview cards
  const ListOfDecks = () => {
    return decks.map((deck) => {
    return (
    <li className="list-group-item border rounded p-3 mb-2" key={deck.id}>
      <DeckPreview deck={deck} />
    </li>)
  })}

  return (!decks) ? "Loading..." : (
    <div className="container">
      <Button.CreateDeckButton />
      {/* List of decks */}
      <ul className="list-group"><ListOfDecks /></ul>
    </div>
  )
}

export default DecksList