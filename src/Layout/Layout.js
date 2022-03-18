import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useLocation } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Decks/Deck";
import DecksList from "../Home/DecksList";
import * as api from "../utils/api"
import Study from "../Study/Study";
import CreateDeck from "../CreateDeck/CreateDeck"
import EditDeck from "../EditDeck/EditDeck"
import AddCard from "../AddCard/AddCard"
import EditCard from "../EditCard/EditCard"
import userEvent from "@testing-library/user-event";


export default function Layout() {
  const [decks, setDecks] = useState()
  const url = useLocation()

  useEffect(() => {
    async function fetchDecks() {
      const deckList = await api.listDecks()
      setDecks(deckList)
    }
    fetchDecks()
    console.log(url)
  }, [])

  console.log(url)

  return (!decks) ? "Loading" : (
    <div className="background-warning">
      <Header />
      
      {/* Routes */}
      <div className="px-4">
      
        <Switch>
          {/* COMPLETED */}

          {/* Home (list of decks) */}
          <Route exact path="/">
            <DecksList decks={decks} />
          </Route>
          {/* Create Deck */}
          <Route exact path="/decks/new">
            <CreateDeck setDecks={setDecks} />
          </Route>
          {/* Edit Deck */}
          <Route exact path={`/decks/:deckId/edit`}>
            <EditDeck decks={decks} />
          </Route>
          {/* Deck */}
          <Route exact path="/decks/:deckId">
            <Deck decks={decks} />
          </Route>
          {/* Study */}
          <Route exact path={`/decks/:deckId/study`}>
            <Study decks={decks}/>
          </Route>
          {/* Edit Card */}
          <Route path={`/decks/:deckId/cards/:cardId/edit`}>
            <EditCard decks={decks}/>
          </Route>
          {/* Add Card */}
          <Route path={`/decks/:deckId/cards/new`}>
            <AddCard decks={decks}/>
          </Route>
 


          {/* Not Found */}
          <Route><NotFound /></Route>
          
        </Switch>
      </div>
    </div>
  );
}