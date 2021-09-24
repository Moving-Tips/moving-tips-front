import ButtonPrimary from "shared/Button/ButtonPrimary"
import React from "react"
import { Helmet } from "react-helmet"
import NcImage from "shared/NcImage/NcImage"
import I404Png from "images/404.png"

const Page404: React.FC = () => (
  <div className="nc-Page404">
    <Helmet>
      <title>404 || Moving Tips</title>
    </Helmet>
    <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
      {/* HEADER */}
      <header className="text-center max-w-2xl mx-auto space-y-2">
        <NcImage src={I404Png} />
        <div className="pt-8">
          <ButtonPrimary href="/">Retornar para pagina principal</ButtonPrimary>
        </div>
      </header>
    </div>
  </div>
)

export default Page404
