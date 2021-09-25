import React, { FC } from "react"

export interface SectionOurFeaturesProps {
  className?: string
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "py-14"
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col lg:flex-row items-center ${className}`}
      data-nc-id="SectionOurFeatures"
    >
    </div>
  )
}

export default SectionOurFeatures
