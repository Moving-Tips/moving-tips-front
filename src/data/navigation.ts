import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem"
import ncNanoId from "utils/ncNanoId"
import __megamenu from "./jsons/__megamenu.json"

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Company
    }))
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "App Name",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.AppName
    }))
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "City",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.City
    }))
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Contruction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Contruction
    }))
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Country
    }))
  }
]

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Inicio"
    // type: "dropdown",
    // children: demoChildMenus,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Melhores Localidades do mês"
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Meus Interesses"
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Minhas Análises"
  }
]
