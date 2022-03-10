// import { decks } from "../data/db.json"
import React from "react"
import Deck from "../Decks/Deck";
import CreateDeckButton from "./CreateDeckButton";


function DecksList({ decks }) {
  const listOfDecks = decks.map((deck) => {
    return (
    <li className="list-group-item border rounded p-3 mb-2" key={deck.id}>
      <Deck deck={deck} />
    </li>)
  })

  return (
    <div className="container">
      <h2>Home</h2>
      <CreateDeckButton />
      {/* <p>List of decks:</p> */}
      <ul className="list-group">{listOfDecks}</ul>
    </div>
  )
}

export default DecksList