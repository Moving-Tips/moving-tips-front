import React, { FC, useEffect } from "react"
import Heading from "components/Heading/Heading"
import Glide from "@glidejs/glide"
import { TaxonomyType } from "data/types"
import ncNanoId from "utils/ncNanoId"
import CardCategory3 from "components/CardCategory3/CardCategory3"
import CardCategory4 from "components/CardCategory4/CardCategory4"
import NextPrev from "shared/NextPrev/NextPrev"
import CardCategory5 from "components/CardCategory5/CardCategory5"

export interface SectionSliderNewCategoriesProps {
  className?: string
  itemClassName?: string
  heading?: string
  subHeading?: string
  categories?: TaxonomyType[]
  categoryCardType?: "card3" | "card4" | "card5"
  itemPerRow?: 4 | 5
  sliderStyle?: "style1" | "style2"
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Casa Natural",
    taxonomy: "category",
    count: 17288,
    thumbnail:
            "https://s2.glbimg.com/7JB9k1wv1lZ_1I9fgTsNIAKLYpw=/smart/e.glbimg.com/og/ed/f/original/2017/09/05/casa-del-suspiro-mexico_01.jpg"
  },
  {
    id: "2",
    href: "#",
    name: "Casa de madeira",
    taxonomy: "category",
    count: 2118,
    thumbnail:
            "https://imagens-revista.vivadecora.com.br/uploads/2019/11/casas-de-madeira.jpg"
  },
  {
    id: "3",
    href: "#",
    name: "Casa flutuante",
    taxonomy: "category",
    count: 36612,
    thumbnail:
            "https://casa.abril.com.br/wp-content/uploads/2020/11/altar-casa-flutuante.png"
  },
  {
    id: "4",
    href: "#",
    name: "Casa na fazenda",
    taxonomy: "category",
    count: 188288,
    thumbnail:
            "https://www.brotasonline.com.br/wp-content/uploads/2020/01/casa-na-fazenda-em-brotas-1.jpg"
  },
  {
    id: "5",
    href: "#",
    name: "Casa domo",
    taxonomy: "category",
    count: 188288,
    thumbnail:
            "https://todososcaminhos.com/wp-content/uploads/2021/02/Domo-geodesico-2.png"
  },
  {
    id: "6",
    href: "#",
    name: "Casa container",
    taxonomy: "category",
    count: 188288,
    thumbnail:
            "https://lh3.googleusercontent.com/proxy/v-o1ledTBXHYpcxZpTY12BtaABMMYevRlht1mGbROdVYIRpYRVQ5AbZxcLeoS6H91XUtQ7Kotnns77E_7_EwZhVeD915uVSZoGxKbfCDJbHVsnDy8DXpKGOM_q7dPzMJwUPVP7Ld4xp3jOALzZ576oYY4ML5Vw"
  }
]

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Cidades em destaques",
  subHeading = "Cidades mais bem avaliadas",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1"
}) => {
  const UNIQUE_CLASS = "glide_" + ncNanoId()

  useEffect(() => {
    if (document.querySelector(`.${UNIQUE_CLASS}`)) {
      new Glide(`.${UNIQUE_CLASS}`, {
        perView: itemPerRow,
        gap: 32,
        bound: true,
        breakpoints: {
          1280: {
            perView: itemPerRow - 1
          },
          1024: {
            gap: 20,
            perView: itemPerRow - 1
          },
          768: {
            gap: 20,
            perView: itemPerRow - 2
          },
          640: {
            gap: 20,
            perView: itemPerRow - 3
          },
          500: {
            gap: 20,
            perView: 1
          }
        }
      }).mount()
    }
  }, [])

  const renderCard = (item: TaxonomyType, index: number) => {
    switch (categoryCardType) {
      case "card3":
        return <CardCategory3 taxonomy={item}/>
      case "card4":
        return <CardCategory4 taxonomy={item}/>
      case "card5":
        return <CardCategory5 taxonomy={item}/>
      default:
        return <CardCategory3 taxonomy={item}/>
    }
  }

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading
          desc={subHeading}
          hasNextPrev={sliderStyle === "style1"}
          isCenter={sliderStyle === "style2"}
        >
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>

        {sliderStyle === "style2" && (
          <NextPrev className="justify-center mt-16"/>
        )}
      </div>
    </div>
  )
}

export default SectionSliderNewCategories
