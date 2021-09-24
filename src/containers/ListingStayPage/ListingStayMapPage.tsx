import React, { FC } from "react"
import BackgroundSection from "components/BackgroundSection/BackgroundSection"
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism"
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox"
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage"
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories"
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2"
import SectionGridHasMap from "./SectionGridHasMap"
import { Helmet } from "react-helmet"

export interface ListingStayMapPageProps {
  className?: string
}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({
  className = ""
}) => {
  return (
    <div
      className={`nc-ListingStayMapPage relative ${className}`}
      data-nc-id="ListingStayMapPage"
    >
      <Helmet>
        <title>MovingTips || Encontre seu novo lar</title>
      </Helmet>
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container pt-5 pb-6 lg:pt-28 lg:pb-32">
        <SectionHeroArchivePage currentPage="Stay" currentTab="Stay" />
      </div>

      {/* SECTION */}
      <div className="container pb-24 lg:pb-32 2xl:pl-10 xl:pr-0 xl:max-w-none">
        <SectionGridHasMap />
      </div>
    </div>
  )
}

export default ListingStayMapPage
