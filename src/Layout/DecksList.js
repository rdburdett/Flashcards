import React from "react"
import DeckPreview from "../Decks/DeckPreview";
import CreateDeckButton from "./CreateDeckButton";

// List of decks for Home page
function DecksList({ decks }) {
  // Build array of deck preview cards
  const listOfDecks = decks.map((deck) => {
    return (
    <li className="list-group-item border rounded p-3 mb-2" key={deck.id}>
      <DeckPreview deck={deck} />
    </li>)
  })

  return (
    <div className="container">
      <CreateDeckButton />
      {/* List of decks */}
      <ul className="list-group">{listOfDecks}</ul>
    </div>
  )
}

export default DecksList