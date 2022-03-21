import React, { useState, useEffect } from "react";
import DeckPreview from "../Home/DeckPreview";
import * as Button from "../Layout/resources/Buttons";
import * as api from "../utils/api";

// List of decks for Home page

export default function DecksList() {
  const [decks, setDecks] = useState();

  async function fetchDecks() {
    const deckList = await api.listDecks();
    setDecks(deckList);
  }

  useEffect(() => {
    fetchDecks();
  }, []);

  const ListOfDecks = () => {
    return decks.map((deck) => {
      const deleteHandler = () => {
        if (
          window.confirm(
            "Delete this deck? \n\n You will not be able to recover it."
          )
        ) {
          api.deleteDeck(deck.id);
          console.log("Deleted deck ", deck.id);
          fetchDecks();
        } else console.log("Cancelled");
      };
      return (
        <li className="list-group-item border rounded p-3 mb-2" key={deck.id}>
          <DeckPreview deck={deck} deleteHandler={deleteHandler} />
        </li>
      );
    });
  };

  return !decks ? (
    "Loading..."
  ) : (
    <div className="container">
      <Button.CreateDeckButton />
      {/* List of decks */}
      <ul className="list-group">
        <ListOfDecks />
      </ul>
    </div>
  );
}
