import BackgroundSection from "components/BackgroundSection/BackgroundSection"
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism"
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage"
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories"
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2"
import { TaxonomyType } from "data/types"
import React, { FC } from "react"
import SectionGridFilterCard from "./SectionGridFilterCard"
import { Helmet } from "react-helmet"

export interface ListingCarPageProps {
  className?: string
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Enjoy the Beauty of Brazil ",
    taxonomy: "category",
    count: 17288,
    thumbnail:
      "https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    listingType: "experiences"
  },
  {
    id: "2",
    href: "#",
    name: "Enjoy the Beauty of Rio de Janeiro",
    taxonomy: "category",
    count: 2118,
    thumbnail:
      "data:image/jpeg;base64,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",
    listingType: "experiences"
  },
  {
    id: "3",
    href: "#",
    name: "Enjoy the Beauty of Bangkok",
    taxonomy: "category",
    count: 36612,
    thumbnail:
      "https://images.pexels.com/photos/732895/pexels-photo-732895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    listingType: "experiences"
  },
  {
    id: "5",
    href: "#",
    name: "Enjoy the Beauty of Brasília",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://media-cdn.tripadvisor.com/media/photo-s/14/01/46/cd/visao-aerea.jpg",
    listingType: "experiences"
  },
  {
    id: "4",
    href: "#",
    name: "Enjoy the Beauty of Seoul",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    listingType: "experiences"
  }
]

const ListingCarPage: FC<ListingCarPageProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-ListingCarPage relative overflow-hidden ${className}`}
      data-nc-id="ListingCarPage"
    >
      <Helmet>
        <title>MovingTips || Encontre seu novo lar</title>
      </Helmet>
      <BgGlassmorphism />

      <div className="container relative">

        {/* SECTION */}
        <SectionGridFilterCard className="pb-24 lg:pb-32" />

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore top destination ✈"
            subHeading="Explore thousands of destinations around the world"
            categoryCardType="card4"
            itemPerRow={4}
            categories={DEMO_CATS}
            sliderStyle="style2"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 className="py-24 lg:py-32" />
      </div>
    </div>
  )
}

export default ListingCarPage
