import React, { FC, useEffect, useState } from "react"
import MainNav1 from "shared/Header/MainNav1"
import { Helmet } from "react-helmet"

export interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
  const [isTop, setisTop] = useState(true)

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction()
    }
  }, [])

  function scrollFunction () {
    const $head = document.getElementById("nc-chifis-header")
    if (!$head) return
    if (
      document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
    ) {
      !!isTop && setisTop(false)
    } else {
      setisTop(true)
    }
  }

  return (
    <div
      id="nc-chifis-header"
      className="nc-Header lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40"
    >
      <Helmet>
        <title>MovingTips || Encontre seu novo lar</title>
      </Helmet>

      <MainNav1 isTop={isTop}/>
    </div>
  )
}

export default Header
