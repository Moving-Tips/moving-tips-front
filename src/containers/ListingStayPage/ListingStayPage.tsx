import BackgroundSection from "components/BackgroundSection/BackgroundSection"
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism"
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage"
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories"
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2"
import { FC } from "react"
import SectionGridFilterCard from "containers/ListingStayPage/SectionGridFilterCard"
import { Helmet } from "react-helmet"

export interface ListingStayPageProps {
  className?: string
}

const ListingStayPage: FC<ListingStayPageProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-ListingStayPage relative overflow-hidden ${className}`}
      data-nc-id="ListingStayPage"
    >
      <Helmet>
        <title>Moving Tips || Listagem</title>
      </Helmet>
      <BgGlassmorphism/>

      <div className="container relative overflow-hidden">
        <SectionHeroArchivePage
          currentPage="Stay"
          currentTab="Stay"
          className="pt-10 pb-24 lg:pb-32 lg:pt-28 "
        />

        <SectionGridFilterCard className="pb-24 lg:pb-32"/>

        <div className="relative py-16">
          <BackgroundSection/>
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>

        <SectionSubscribe2 className="py-24 lg:py-32"/>
      </div>
    </div>
  )
}

export default ListingStayPage
