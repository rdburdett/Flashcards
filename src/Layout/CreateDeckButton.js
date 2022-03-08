import React from "react";
import { Route, Switch, useRouteMatch, useHistory, Link } from "react-router-dom";

function CreateDeckButton() {
  const createDeckButtonHandler = () => {
    console.log("clicked");
  };

  return (
    <div>
      <button
        className="mb-2 p-2 button border border-secondary btn-secondary rounded"
        onClick={() => createDeckButtonHandler()}
      >
        <Link to={`/decks/new`}>
        + Create Deck
        </Link>
      </button>
    </div>
  );
}

export default CreateDeckButton;
