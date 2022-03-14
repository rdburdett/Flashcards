import React from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";


// "/decks/:deckId"

export default function Deck({ decks }) {
  const { deckId } = useParams()

  const Cards = () => {
    // const listOfCards = cards.map((card) => {
    //   return <li key={card.id}>{card.name}</li>
    // })
    return (
      <p>Cards</p>
    )
  };

  return (
    <div className="container">
      <div>
        {decks[deckId].description}
      </div>

      <Link to={`/decks/${deckId}/edit`}>
        <button className="mr-2 p-2 button text-white border border-secondary btn-secondary rounded">
          Edit
        </button>
      </Link>

      <Link to={`/decks/${deckId}/study`}>
        <button className="mr-2 p-2 button text-white border border-primary btn-primary rounded">
          Study
        </button>
      </Link>

      <Link to={`/decks/${deckId}/new`}>
        <button className="mr-2 p-2 button text-white border border-primary btn-primary rounded">
          Add Cards
        </button>
      </Link>

      <button className=" p-2 button border border-danger btn-danger rounded float-right">
        <i className="bi bi-trash-fill"></i>
      </button>

      <Cards />


    </div>
  )
}
