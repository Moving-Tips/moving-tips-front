import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Page } from "./types"
import ScrollToTop from "./ScrollToTop"
import PageHome from "containers/PageHome/PageHome"
import Header from "shared/Header/Header"
import Page404 from "containers/Page404/Page404"
import ListingStayPage from "containers/ListingStayPage/ListingStayPage"
import ListingStayMapPage from "containers/ListingStayPage/ListingStayMapPage"
import ListingStayDetailPage from "containers/ListingDetailPage/ListingStayDetailPage"
import AccountPage from "containers/AccountPage/AccountPage"
import AccountPass from "containers/AccountPage/AccountPass"
import PageSignUp from "containers/PageSignUp/PageSignUp"
import PageLogin from "containers/PageLogin/PageLogin"
import PageSubcription from "containers/PageSubcription/PageSubcription"
import PageAddListing1 from "containers/PageAddListing1/PageAddListing1"
import PageAddListing2 from "containers/PageAddListing1/PageAddListing2"
import PageAddListing3 from "containers/PageAddListing1/PageAddListing3"
import PageAddListing4 from "containers/PageAddListing1/PageAddListing4"
import PageAddListing5 from "containers/PageAddListing1/PageAddListing5"

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome },
  { path: "/listing-stay", component: ListingStayPage },
  { path: "/listing-stay-map", component: ListingStayMapPage },
  { path: "/listing-stay-detail", component: ListingStayDetailPage },
  { path: "/account", component: AccountPage },
  { path: "/account-password", component: AccountPass },
  { path: "/add-listing-1", component: PageAddListing1 },
  { path: "/add-listing-2", component: PageAddListing2 },
  { path: "/add-listing-3", component: PageAddListing3 },
  { path: "/add-listing-4", component: PageAddListing4 },
  { path: "/add-listing-5", component: PageAddListing5 },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription }
]

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          )
        })}
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
