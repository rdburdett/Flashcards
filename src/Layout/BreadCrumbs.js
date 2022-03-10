// import { decks } from "../data/db.json"
import React from "react"
import { HouseFill } from 'react-bootstrap-icons'
import { useHistory, useParams, Link } from "react-router-dom"

function BreadCrumbs({ path }) {
  const history = useHistory()

  const homeLink = (
    <div>
      {/* fix history push */}
      <Link to="/" className="d-flex align-items-center text-primary">
        <HouseFill className="mr-1" />Home
      </Link>
    </div>
    
  )

  return (
    <div className="container border rounded p-3">
      {homeLink}
    </div>
  )
}

export default BreadCrumbs