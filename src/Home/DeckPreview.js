import React from "react";
import {
  Link,
} from "react-router-dom";

// TODO: change static to fetch from API localhost:8080
// import { cards } from "../data/db.json";


function DeckPreview({ deck }) {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between">
        <h4>{deck.name}</h4>
        <p>{deck.cards.length} cards</p>
      </div>
      <div>
        <p>{deck.description}</p>
      </div>

      <Link to={`/decks/${deck.id}`}>
        <button className="mr-2 p-2 button text-white border border-secondary btn-secondary rounded">
        <i className="bi bi-eye-fill"></i> View
        </button>
      </Link>

      <Link to={`/decks/${deck.id}/study`}>
        <button className="mr-2 p-2 button text-white border border-primary btn-primary rounded">
        <i className="bi bi-journal-bookmark-fill"></i> Study
        </button>
      </Link>

      <button className=" p-2 button border border-danger btn-danger rounded float-right">
        <i className="bi bi-trash-fill"></i>
      </button>
      {/* <Button.Trash onClick={deleteHandler} /> */}
      

    </div>
  );
}

export default DeckPreview;
