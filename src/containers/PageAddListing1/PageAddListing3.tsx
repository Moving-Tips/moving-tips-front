import { FC } from "react"
import Textarea from "shared/Textarea/Textarea"
import CommonLayout from "./CommonLayout"

export interface PageAddListing3Props {}

const PageAddListing3: FC<PageAddListing3Props> = () => {
  return (
    <CommonLayout
      index="03"
      backtHref="/add-listing-2"
      nextHref="/add-listing-4"
    >
      <>
        <div>
          <h2 className="text-2xl font-semibold">
            Sua descrição do bairro
          </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Mencione as principais caracteristicas do seu bairro. Disserte sobre os pontos positivos e negativos de acordo com a avaliação feita previamente. Importante elencar também possiveis pontos de atenção!
          </span>
        </div>

        <Textarea placeholder="..." rows={14} />
      </>
    </CommonLayout>
  )
}

export default PageAddListing3
