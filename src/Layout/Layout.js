import React, { useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Decks/Deck";
import DecksList from "./DecksList";
import BreadCrumbs from "./BreadCrumbs"
import { decks, cards } from "../data/db.json";

function Layout() {
  const { path } = useRouteMatch();
  // console.log(path)
  // console.log(decks)
  const [deckState, setDeckState] = useState(decks)
  
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Nav Links */}
      <BreadCrumbs path={path} />
      
      {/* Routes */}
      <div className="px-4">
      
        <Switch>
          {/* Home (list of decks) */}
          <Route exact path="/"><DecksList decks={deckState} /></Route>
          {/* Create Deck */}
          <Route path="/decks/new"><p>Create Deck</p></Route>
          {/* Deck */}
          <Route path="/decks/:deckId"><Deck />Deck</Route>
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


export default Layout;

