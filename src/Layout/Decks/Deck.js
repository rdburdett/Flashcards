import React from "react";
import { Route, Switch, useRouteMatch, Link, useParams } from "react-router-dom";

function Deck() {
  const { path, url } = useRouteMatch();
  const { deckId } = useParams()
  console.log(path)

  const Cards = () => {
    return <p>Cards</p>;
  };

  return (
    <div className="container">
      <h4>Deck Name</h4>

      <button className="mr-2 p-2 button border border-secondary btn-secondary rounded">
        <Link to={`${url}/edit`}>Edit</Link>
      </button>

      <button className="mr-2 p-2 button border border-primary btn-primary rounded">
        <Link to={`${url}/study`}>Study</Link>
      </button>

      <button className="mr-2 p-2 button border border-primary btn-primary rounded">
        <Link to={`${url}/cards/new`}>Add Cards</Link>
      </button>

      <button className="mr-2 p-2 button border border-danger btn-danger rounded">
        Delete
      </button>
        

      <div className="p-2 button border border-secondary btn-secondary rounded">

        {/* Study */}
        <Route path={`${path}/study`}>
          <p>Study</p>
        </Route>

        {/* Edit Deck */}
        <Route path={`${path}/edit`}>
          <p>Edit Deck</p>
        </Route>

        {/* Add Card */}
        <Route></Route>

        {/* Edit Card */}
        <Route></Route>

      </div>
    </div>
  );
}

export default Deck;
