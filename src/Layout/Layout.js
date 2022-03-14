import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Decks/Deck";
import DecksList from "../Home/DecksList";
import * as api from "../utils/api"

export default function Layout() {
  const [deckState, setDeckState] = useState()

  useEffect(() => {
    async function fetchDecks() {
      // You can await here
      const deckList = await api.listDecks()
      // ...
      setDeckState(deckList)
    }
    fetchDecks()
  }, [])

  return (!deckState) ? "Loading" : (
    <div className="background-warning">
      {/* Header */}
      <Header />
      
      {/* Routes */}
      <div className="px-4">
      
        <Switch>
          {/* COMPLETED */}

          {/* Home (list of decks) */}
          <Route exact path="/"><DecksList decks={deckState} /></Route>
          {/* Deck */}
          <Route path="/decks/:deckId"><Deck decks={deckState} /></Route>




          {/* TODO */}
          {/* Create Deck */}
          <Route path="/decks/new"><p>Create Deck</p></Route>
          {/* Study */}
          <Route path={`/decks/:deckId/study`}><p>Study</p></Route>
          {/* Edit Deck */}
          <Route path={`/decks/:deckId/edit`}><p>Edit Deck</p></Route>
          {/* Add Card */}
          <Route path={`/decks/:deckId/cards/new`}></Route>
          {/* Edit Card */}
          <Route path={`/decks/:deckId/cards/:cardId/edit`}></Route>
          {/* Not Found */}
          <Route><NotFound /></Route>
          
        </Switch>
      </div>
    </div>
  );
}