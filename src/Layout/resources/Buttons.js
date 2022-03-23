import React from "react";
import { Link } from "react-router-dom";

const commonStyling = "mr-2 p-2 button text-white border rounded";

export function CreateDeckButton() {

  return (
    <div>
      <Link to={`/decks/new`}>
        <button
          className={`${commonStyling} mb-2 border-secondary btn-secondary`}
        >
          <i className="bi bi-plus-lg"></i> Create Deck
        </button>
      </Link>
    </div>
  );
}

export function Edit() {
  return (
    <button className={`${commonStyling} border-secondary btn-secondary`}>
      <i className="mr-2 bi bi-pencil-fill" />
      Edit
    </button>
  );
}

export function Study() {
  return (
    <button className={`${commonStyling} border-primary btn-primary`}>
      <i className="mr-2 bi bi-journal-bookmark-fill" />
      Study
    </button>
  );
}

export function AddCard() {
  return (
    <button className={`${commonStyling} border-primary btn-primary`}>
      <i className="mr-2 bi bi-plus-circle-fill" />
      Add Card
    </button>
  );
}

export function Trash({ onClick }) {
  return (
    <button onClick={onClick} className={`${commonStyling} border-danger btn-danger float-right`}>
      <i className="bi bi-trash-fill" />
    </button>
  );
}

export function Next({ onClick }) {
  return (
    <button onClick={ onClick } className={`${commonStyling} border-primary btn-primary`}>
      Next
      <i className="ml-1 bi bi-chevron-right" />
    </button>
  );
}

export function Flip({ onClick }) {
  return (
    <button onClick={ onClick } className={`${commonStyling} border-secondary btn-secondary`}>
      <i className="mr-2 bi bi-arrow-repeat" />
      Flip
    </button>
  );
}
