import React, { FC, ReactNode } from "react"
import { DEMO_STAY_LISTINGS } from "data/listings"
import { StayDataType } from "data/types"
import ButtonPrimary from "shared/Button/ButtonPrimary"
import HeaderFilter from "containers/PageHome/HeaderFilter"
import StayCard from "components/StayCard/StayCard"

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8)

export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[]
  gridClass?: string
  heading?: ReactNode
  subHeading?: ReactNode
  headingIsCenter?: boolean
  tabs?: string[]
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Bairros destaque",
  subHeading = "Lugares populares para morar que a Moving tips recomenda para você",
  headingIsCenter,
  tabs = ["São Paulo", "Santo André", "Rio de Janeiro", "Brasília"]
}) => {
  const renderCard = (stay: StayDataType) => {
    return <StayCard key={stay.id} data={stay}/>
  }

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={"New York"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onClickTab={() => {
        }}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {DEMO_DATA.map((stay) => renderCard(stay))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary href="/login">Mostre-me mais</ButtonPrimary>
      </div>
    </div>
  )
}

export default SectionGridFeaturePlaces
