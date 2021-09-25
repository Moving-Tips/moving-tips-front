import React, { FC, useState } from "react"
import facebookSvg from "images/Facebook.svg"
import twitterSvg from "images/Twitter.svg"
import googleSvg from "images/Google.svg"
import { Helmet } from "react-helmet"
import Input from "shared/Input/Input"
import { Link, useHistory } from "react-router-dom"
import ButtonPrimary from "shared/Button/ButtonPrimary"
import { Alert } from "shared/Alert/Alert"
import { usersCreated } from "data/users"
export interface PageLoginProps {
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

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const validateLogin = () => {
    if (usersCreated[0] === email) {
      if (usersCreated[1] === password) {
        callHome()
      } else {
        alert("Senha inválida")
      }
    } else {
      alert("Email inválido")
    }
  }

  const handleEmail = (event: { target: { value: any } }) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: { target: { value: any } }) => {
    setPassword(event.target.value)
  }

  const callHome = () => {
    history.push("/")
  }

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Encontre seu novo lar</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <div className="max-w-md mx-auto space-y-6">
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
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              Ou
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"/>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" onSubmit={validateLogin}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email
              </span>
              <Input
                type="email"
                placeholder="exemplo@exemplo.com"
                className="mt-1"
                id="inputEmail"
                onChange={handleEmail}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Senha
                <Link to="/forgot-pass" className="text-sm">
                  Esqueceu a senha?
                </Link>
              </span>
              <Input type="password" id="inputPassword" className="mt-1" onChange={handlePassword}/>
            </label>
            <ButtonPrimary type="submit" >Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link to="/signup">Criar conta</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageLogin
