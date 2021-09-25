import Heading from "components/Heading/Heading"
import React, { FC } from "react"
import NcImage from "shared/NcImage/NcImage"
import HIW1img from "images/HIW1.png"
import HIW2img from "images/HIW2.png"
import HIW3img from "images/HIW3.png"
import VectorImg from "images/VectorHIW.svg"

export interface SectionHowItWorkProps {
  className?: string
}

const DEMO_DATA = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwuTn8X96JCstCI50ulxHwSm9lR75KqdnOQ&usqp=CAU",
    title: "Tenha novas perspectivas",
    desc: "Vista aérea do bairro do Flamengo, Rio de Janeiro"
  },
  {
    id: 2,
    img: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_recife_aflitos_590.jpg?quality=70&strip=info&w=920",
    title: "Compartilhe",
    desc: "Condomínio em área residencial de Brasília "
  }
]

const SectionHowItWork: FC<SectionHowItWorkProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading isCenter desc="">
       Como funciona
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <img
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        />
        {DEMO_DATA.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <NcImage
              containerClassName="mb-8 max-w-[200px] mx-auto"
              src={item.img}
            />
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionHowItWork
