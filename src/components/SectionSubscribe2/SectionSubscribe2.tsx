import { FC } from "react"
import ButtonPrimary from "shared/Button/ButtonPrimary"

export interface SectionSubscribe2Props {
  className?: string
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Porque escolher a gente? 🎉</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Porque somos os melhores! Leia e também avalie suas experiências
        </span>
        <ButtonPrimary href="/login">Seja um morador</ButtonPrimary>
      </div>
    </div>
  )
}

export default SectionSubscribe2
