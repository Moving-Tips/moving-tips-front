import { FC } from "react"

import { NavLink } from "react-router-dom"

export interface CommonLayoutProps {}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className="nc-CommonLayoutProps bg-neutral-50 dark:bg-neutral-900">
      <div className="border-b border-neutral-200 dark:border-neutral-700 pt-12 bg-white dark:bg-neutral-800">
        <div className="container">
          <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
            <NavLink
              activeClassName="!border-primary-500"
              to="/account"
              className="block py-5 md:py-8 border-b-2 border-transparent flex-shrink-0"
            >
              Perfil do usuário
            </NavLink>
            <NavLink
              activeClassName="!border-primary-500"
              to="/account-password"
              className="block py-5 md:py-8 border-b-2 border-transparent flex-shrink-0"
            >
              Trocar Senha
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container pt-14 sm:pt-20 pb-24 lg:pb-32">{children}</div>
    </div>
  )
}

export default CommonLayout
