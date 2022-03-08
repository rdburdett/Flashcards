import React from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeckButton from "./CreateDeckButton";
import Deck from "./Decks/Deck";
import { decks, cards } from "../data/db.json";

function Layout() {
  const { path } = useRouteMatch();
  // console.log(path)

  const DecksRoute = () => {
    const listOfDecks = decks.map((deck) => {
      <li>{deck}</li>
    })

    return (
      <div className="container">
        <CreateDeckButton />
        <p>List of decks</p>
        <ul>{listOfDecks}</ul>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Nav Links */}
      <div className="container p-3"><Link to={`/`}>Home</Link>{` / `}</div>
      
      {/* Routes */}
      <div className="container px-4">
        <Switch>
          {/* Home */}
          <Route exact path="/"><DecksRoute /></Route>
          {/* Create Deck */}
          <Route path="/decks/new"><p>Create Deck</p></Route>
          {/* Decks */}
          <Route path={`/decks/:deckId`}><Deck /></Route>
          {/* Not Found */}
          <Route><NotFound /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
