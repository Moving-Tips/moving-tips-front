import StayCard from "components/StayCard/StayCard"
import { DEMO_STAY_LISTINGS } from "data/listings"
import { FC } from "react"
import CommonLayout from "containers/PageAddListing1/CommonLayout"

export interface PageAddListing5Props {}

const PageAddListing5: FC<PageAddListing5Props> = () => {
  return (
    <CommonLayout
      nextBtnText="Salvar"
      index="5"
      backtHref="/add-listing-4"
      nextHref="/"
    >
      <>
        <div>
          <h2 className="text-2xl font-semibold">Muito bem! 🎉</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Excelente, parabéns por completar o cadastro do seu bairro, o mesmo está aguardando a ser revisado para publicação
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
        <div>
          <h3 className="text-lg font-semibold">Este é seu bairro</h3>
          <div className="max-w-xs">
            <StayCard
              className="mt-8"
              data={{ ...DEMO_STAY_LISTINGS[0], reviewStart: 0 }}
            />
          </div>
        </div>
      </>
    </CommonLayout>
  )
}

export default PageAddListing5
