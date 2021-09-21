import React, { FC, ReactNode } from "react"
import imagePng from "images/hero-right2.png"
import HeroSearchForm, {
  SearchTab
} from "components/HeroSearchForm/HeroSearchForm"

export interface SectionHeroArchivePageProps {
  className?: string
  listingType?: ReactNode
  currentPage: "Stay" | "Experiences" | "Rental car"
  currentTab: SearchTab
}

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = "",
  listingType,
  currentPage,
  currentTab
}) => {
  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flow-root w-full">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <HeroSearchForm currentPage={currentPage} currentTab={currentTab} />
        </div>
      </div>
    </div>
  )
}

export default SectionHeroArchivePage
