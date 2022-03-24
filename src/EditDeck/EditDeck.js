import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../utils/api";

// Route = "/decks/:deckId/edit"

export default function EditDeck() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  useEffect(() => {
    const fetchDeck = async (setDeck, deckId) => {
      const res = await api.readDeck(deckId);
      setDeck(res);
    };
    fetchDeck(setDeck, deckId)
  }, [deckId])

  const title = "Edit Deck";

  ////////// Components //////////

  const Crumbs = () => {
    // const filteredDeck = filterDecks();
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{`${deck.name}`}</a>
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
    const [updatedDeck, setUpdatedDeck] = useState(deck);

    const handleSubmit = (e) => {
      e.preventDefault();

      api.updateDeck(updatedDeck).then((res) => {
        history.push(`/decks/${res.id}`)
      })
    };

    const handleChange = (e) => {
      e.preventDefault()
      const val = e.target.value
      const key = e.target.name
      setUpdatedDeck({
        ...updatedDeck,
        [key]: val,
      })
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Deck Name"
            value={updatedDeck.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Description</label>
          <textarea
            className="min-w-50 form-control"
            type="text"
            id="description"
            name="description"
            placeholder="Brief description of the deck" 
            value={updatedDeck.description}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="cancel"
          className="mr-2 btn btn-secondary"
          onClick={() => {
            history.push("/");
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  };

  // MAIN RENDER
  return !deck ? (
    "Loading..."
  ) : (
    <div className="container">
      <Crumbs />
      <Header />
      <Form />
    </div>
  );
}