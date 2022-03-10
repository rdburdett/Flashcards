import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  Link,
} from "react-router-dom";

function CreateDeckButton() {
  const createDeckButtonHandler = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Link to={`/decks/new`}>
        <button
          className="mb-2 p-2 button border text-white border-secondary btn-secondary rounded"
          onClick={() => createDeckButtonHandler()}
        >
          + Create Deck
        </button>
      </Link>
    </div>
  );
}

export default CreateDeckButton;
