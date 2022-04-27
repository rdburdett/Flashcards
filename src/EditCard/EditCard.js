import React from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../utils/api";
import * as Button from "../Layout/resources/Buttons";

// Route = "/decks/:deckId"

export default function AddCard({ decks }) {
  const history = useHistory();
  const { deckId } = useParams();
  const filteredDeck = decks.filter((deck) => deck.id === parseInt(deckId))[0];

  // async function fetchDecks() {
  //   const deckList = await api.listDecks()
  //   setDeckState(deckList)
  // }

  const title = "Edit Card";

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Clicked", e.target)
    // createDeck()
  };

  ////////// Components //////////

  const Crumbs = () => {
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{`${filteredDeck.name}`}</a>
          </li>
          <li className="breadcrumb-item">{title}</li>
        </ol>
      </nav>
    );
  };

  const Header = () => {
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  };

  const Form = () => {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Front</label>
          <textarea
            className="form-control"
            type="text"
            id="name"
            placeholder="Front side of card"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Back</label>
          <textarea
            className="min-w-50 form-control"
            type="text"
            id="name"
            placeholder="Back side of card"
          />
        </div>
        <button
          type="cancel"
          className="mr-2 btn btn-secondary"
          onClick={() => {
            history.push("/");
          }}
        >
          Done
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          Save
        </button>
      </form>
    );
  };

  {
    /* <input type="text" value={this.state.value} onChange={this.handleChange} /> */
  }

  // MAIN RENDER
  return (
    <div className="container">
      <Crumbs />
      <Header />
      <Form />
    </div>
  );
}
