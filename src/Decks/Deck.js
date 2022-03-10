import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import { cards } from "../data/db.json";


function Deck({ deck }) {
  const { path, url } = useRouteMatch();
  const { deckId } = useParams();
  const history = useHistory()
  console.log(path);

  const Cards = () => {
    const listOfCards = cards.map((card) => {
      return <li key={card.id}>{card.name}</li>
    })
    return <p>Cards</p>;
  };

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between">
        <h4>{deck.name}</h4>
        <p>{cards.length} cards</p>
      </div>
      <div>
        <p>{deck.description}</p>
      </div>

      <Link to={`${url}/`}>
        <button className="mr-2 p-2 button text-white border border-secondary btn-secondary rounded">
        <i class="bi bi-eye-fill"></i> View
        </button>
      </Link>

      <Link to={`${url}/study`}>
        <button className="mr-2 p-2 button text-white border border-primary btn-primary rounded">
        <i class="bi bi-journal-bookmark-fill"></i> Study
        </button>
      </Link>

      <button className=" p-2 button border border-danger btn-danger rounded float-right">
      <i class="bi bi-trash-fill"></i>
      </button>

      {/* <Link to={`${url}/edit`}>
        <button className="mr-2 p-2 button text-white border border-secondary btn-secondary rounded">
          Edit
        </button>
      </Link> */}

      {/* <Link to={`${url}/cards/new`}>
        <button className="mr-2 p-2 button text-white border border-primary btn-primary rounded">
          Add Cards
        </button>
      </Link> */}

      

      <div>

      </div>
    </div>
  );
}

export default Deck;
