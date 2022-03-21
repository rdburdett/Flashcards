import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../utils/api";
// import * as Button from "../Layout/resources/Buttons";

// Route = "/decks/:deckId/cards/new"

export default function AddCard({ decks }) {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  useEffect(() => {
    const fetchDeck = async () => {
      const res = await api.readDeck(deckId);
      // console.log(res)
      setDeck(res);
    };
    fetchDeck();
  }, [deckId]);

  const title = "Add Card";

  ////////// Components //////////

  const Crumbs = () => {
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
    const [newCard, setNewCard] = useState({
      front: "",
      back: "",
    });
        
    const handleChange = (e) => {
      e.preventDefault()
      const val = e.target.value
      const key = e.target.name
      setNewCard({
        ...newCard,
        [key]: val,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log("Clicked", newDeck);

      api.createCard(deckId, newCard).then((res) => {
        console.log(res.id)
        history.push(`/decks/${deckId}`)
        // history.push(`/decks/${deckId}/${res.id}`)
      })
    };

    console.log(newCard.front, newCard.back)

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
        <button
          type="submit"
          className="btn btn-primary"
        >
          Save
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
