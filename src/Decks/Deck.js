import React from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Deck({ cards }) {
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
    <div>
      <Cards />
      
      <Link to={`/decks/${deckId}/edit`}>
        <button className="mr-2 p-2 button text-white border border-secondary btn-secondary rounded">
          Edit
        </button>
      </Link>

      <Link to={`/decks/${deckId}/new`}>
        <button className="mr-2 p-2 button text-white border border-primary btn-primary rounded">
          Add Cards
        </button>
      </Link>
    </div>
  )
}


