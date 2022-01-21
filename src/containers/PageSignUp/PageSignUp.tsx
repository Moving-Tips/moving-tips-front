import React, { FC } from "react"
import facebookSvg from "images/Facebook.svg"
import twitterSvg from "images/Twitter.svg"
import googleSvg from "images/Google.svg"
import { Helmet } from "react-helmet"
import ButtonPrimary from "shared/Button/ButtonPrimary"
import { Link } from "react-router-dom"
import FormEmail from "shared/EmailInput/FormEmail"
import PasswordAndConfirm from "../../shared/PasswordAndConfirm/PasswordAndConfirm"
import axios from "axios"

export interface PageSignUpProps {
  className?: string
}

const loginSocials = [
  {
    name: "Entrar com Facebook",
    href: "#",
    icon: facebookSvg
  },
  {
    name: "Entrar com Twitter",
    href: "#",
    icon: twitterSvg
  },
  {
    name: "Entrar com Google",
    href: "#",
    icon: googleSvg
  }
]
const handleSubmit = (event: { preventDefault: () => void}) => {
  event.preventDefault()
  console.log(event)
  // axios.post('https://apimovingtipscore.azurewebsites.net/Users', ({ userid: x }))
  //   .then((res: { data: any }) => {
  //     console.log(res)
  //     console.log(res.data)
  //   })
}
const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Moving Tips || Encontre seu novo lar</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          <div className="relative text-center">
            <span
              className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div
              className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"/>
          </div>
          {/* FORM */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6" action="#" method="post">
            <FormEmail/>
            <PasswordAndConfirm/>
            <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
          </form>
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Já possui uma conta? {` `}
            <Link to="/login">Entrar</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageSignUp
