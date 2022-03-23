import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../utils/api";

export default function Form() {
  const history = useHistory();
  const { deckId } = useParams();

  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    const key = e.target.name;
    setNewCard({
      ...newCard,
      [key]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.createCard(deckId, newCard).then((res) => {
      history.push(`/decks/${deckId}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          type="text"
          id="front"
          name="front"
          placeholder="Front side of card"
          value={newCard.front}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          className="min-w-50 form-control"
          type="text"
          id="back"
          name="back"
          placeholder="Back side of card"
          value={newCard.back}
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
        Done
      </button>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};