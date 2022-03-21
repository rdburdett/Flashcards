import React from "react";
import { Route, Switch } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Decks/Deck";
import DecksList from "../Home/DecksList";
import Study from "../Study/Study";
import CreateDeck from "../CreateDeck/CreateDeck"
import EditDeck from "../EditDeck/EditDeck"
import AddCard from "../AddCard/AddCard"
import EditCard from "../EditCard/EditCard"

// TODO: 
// - Delete card prompt
// - Add Card
// - Edit Card
// - 

export default function Layout() {
  return (
    <div className="background-warning">
      <Header />
      
      {/* Routes */}
      <div className="px-4 mb-4">
      
        <Switch>
          {/* COMPLETED */}

          {/* Home (list of decks) */}
          <Route exact path="/">
            <DecksList />
          </Route>
          {/* Create Deck */}
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          {/* Edit Deck */}
          <Route exact path={`/decks/:deckId/edit`}>
            <EditDeck />
          </Route>
          {/* Deck DONE */}
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          {/* Study DONE */}
          <Route exact path={`/decks/:deckId/study`}>
            <Study/>
          </Route>
          {/* Edit Card */}
          <Route path={`/decks/:deckId/cards/:cardId/edit`}>
            <EditCard/>
          </Route>
          {/* Add Card */}
          <Route path={`/decks/:deckId/cards/new`}>
            <AddCard/>
          </Route>
          {/* Not Found */}
          <Route><NotFound /></Route>

        </Switch>
      </div>
    </div>
  );
}