import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form"
import fetchDeck from "../utils/fetchDeck";

// Route = "/decks/:deckId/cards/new"

export default function AddCard({ decks }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  useEffect(() => {
    fetchDeck(setDeck, deckId);
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

  // MAIN RENDER
  return !deck ? (
    "Loading..."
  ) : (
    <div className="container">
      <Crumbs />
      <Header />
      <Form submitType="add"/>
    </div>
  );
}
