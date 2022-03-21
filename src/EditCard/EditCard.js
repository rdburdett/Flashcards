import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../utils/api";

// Route = "/decks/:deckId/cards/:cardId/edit"

export default function AddCard() {
  const history = useHistory();
  const { deckId, cardId } = useParams();
  const [ deck, setDeck ] = useState();
  const [ card, setCard ] = useState()
  // console.log(deck)



  useEffect(() => {
    
    const fetchDeck = async () => {
      // const filteredCards = (res.cards.filter((card) => card.id === parseInt(cardId))[0])

      const res = await api.readDeck(deckId)
      const filteredCard = (res.cards.filter((card) => card.id === parseInt(cardId))[0])
      console.log("res: ", res, "Card: ", filteredCard)
      setDeck(res)
      setCard(filteredCard)
    };
    fetchDeck()

  }, [deckId, cardId, setDeck, setCard ])



  // const filteredCards = filterCards()
  // setCard(filteredCards)

  // const filterDecks = () => (decks.filter((deck) => deck.id === parseInt(deckId))[0]);

  // const filterCards = () => {
  //   const filteredDeck = decks.filter((deck) => deck.id === parseInt(deckId))[0];
  // }
  const title = `Edit Card ${cardId}`;

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
    
    // const filterCards = () => (deck.cards.filter((card) => card.id === parseInt(cardId))[0]);
    // const filteredCards = filterCards()
    // setCard(filteredCards)

    const [updatedCard, setUpdatedCard] = useState(card);
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log("Clicked", newDeck);

      api.updateCard(updatedCard).then((res) => {
        console.log(res.id)
        history.push(`/decks/${deckId}`)
        // history.push(`/decks/${deckId}/${res.id}`)
      })
    };

    const handleChange = (e) => {
      e.preventDefault()
      const val = e.target.value
      const key = e.target.name
      setUpdatedCard({
        ...updatedCard,
        [key]: val,
      })
    }
    console.log(updatedCard.front, updatedCard.back)

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
            value={updatedCard.front}
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
            value={updatedCard.back}
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
  return !card ? (
    "Loading..."
  ) : (
    <div className="container">
      <Crumbs />
      <Header />
      <Form />
    </div>
  );
}
