import React, { ReactNode } from "react"

export interface Heading2Props {
  heading?: ReactNode
  subHeading?: ReactNode
  className?: string
}

const Heading2: React.FC<Heading2Props> = ({
  className = "",
  heading = "Experiências",
  subHeading
}) => {
  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <h2 className="text-4xl text-center font-semibold">{heading}</h2>
      {subHeading || (
        <span className="block text-center text-neutral-500 dark:text-neutral-400 mt-3">
          2 resultados
        </span>
      )}
    </div>
  )
}

export default Heading2
