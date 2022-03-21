import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as api from "../utils/api";

// Route = "/decks/new"

export default function CreateDeck() {
  const history = useHistory();
  const title = "Create Deck";

  ////////// Components //////////

  const Crumbs = () => {
    return (
      <nav id="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
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
    const [newDeck, setNewDeck] = useState({
      name: "",
      description: "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();

      api.createDeck(newDeck).then((res) => {
        history.push(`/decks/${res.id}`);
      });
    };

    const handleChange = (e) => {
      e.preventDefault();
      const val = e.target.value;
      const key = e.target.name;
      setNewDeck({
        ...newDeck,
        [key]: val,
      });
    };

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
            value={newDeck.name}
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
            value={newDeck.description}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };

  // MAIN RENDER
  return (
    <div className="container">
      <Crumbs />
      <Header />
      <Form />
    </div>
  );
}
