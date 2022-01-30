import { NavItemType } from "shared/Navigation/NavigationItem"
import ncNanoId from "utils/ncNanoId"

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Inicio"
  },
  {
    id: ncNanoId(),
    href: "/district",
    name: "Bairros"
  },
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Sair"
  }
]
