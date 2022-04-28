import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Button from "../Layout/resources/Buttons"

export default function Flipper({ cards }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false)
  const [flipTrue, setFlipTrue] = useState(false)
  const history = useHistory()

  // console.log((currentCard + 1), cards.length)

  const handleNext = () => {
    if ((currentCard + 1) < cards.length) {
      setCurrentCard((currentCard) => currentCard+1)
      setFlipTrue(false)
      setIsFlipped(false)
    } else {
      (window.confirm("Do you want to restart?")) ? setCurrentCard(0) : history.push('/')
    }
  }

  const Index = () => {
    return <div className="mb-3"><h4>{`Card ${currentCard+1} of ${cards.length}`}</h4></div>
  }

  const CardContent = () => {
    const content = (isFlipped) ? cards[currentCard].back : cards[currentCard].front
    return <div className="mb-3" style={{minHeight:50}}>{content}</div>
  }

  const Buttons = () => {
    const buttons = (flipTrue) ? (
      (<div>
        <Button.Flip onClick={() => setIsFlipped(!isFlipped)} />
        <Button.Next onClick={handleNext} />
      </div>)
    ) : (<Button.Flip onClick={() => {
      setFlipTrue(true)
      setIsFlipped(!isFlipped)}} />)
    return buttons
  }

  return (
    <div className="border rounded p-3">
      <Index />
      <CardContent />
      <Buttons />
    </div>
  )
}