import NcInputNumber from "components/NcInputNumber/NcInputNumber"
import { FC } from "react"
import CommonLayout from "./CommonLayout"

export interface PageAddListing2Props {}

const PageAddListing2: FC<PageAddListing2Props> = () => {
  return (
    <CommonLayout
      index="02"
      backtHref="/add-listing-1"
      nextHref="/add-listing-3"
    >
      <>
        <h2 className="text-2xl font-semibold">Avaliação do bairro</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          {/* ITEM */}
          <NcInputNumber label="Segurança" defaultValue={4} />
          <NcInputNumber label="Serviços públicos" defaultValue={4} />
          <NcInputNumber label="Serviços privados" defaultValue={4} />
          <NcInputNumber label="Saúde" defaultValue={2} />
          <NcInputNumber label="Transporte" defaultValue={2} />
          <NcInputNumber label="Lazer" defaultValue={2} />
        </div>
      </>
    </CommonLayout>
  )
}

export default PageAddListing2
