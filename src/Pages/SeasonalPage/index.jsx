import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {CarouselComponent} from "../../components"
import "./style.css"

const seasons = ["spring", "summer", "autumn", "winter"]

const SeasonalPage = () => {
  const {season} = useParams()
  if(!seasons.includes(season)) {
    return <Navigate replace={true} to="/notfound" />
  }

  return (
    <>
    <div id="Sidebanner" className={season}>
      <div className="Content">
      </div>
    </div>
    <div id="MainContent">
      <div id="Title" className={season}>
        {season}
      </div>
      <div id="Carousel" className={season}>
        <CarouselComponent />
      </div>
    </div>
    </>
  )
}

export default SeasonalPage
