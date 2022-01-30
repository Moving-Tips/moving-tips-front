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
import axios from "axios"
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

function getAuth (response: any) {
  axios.defaults.headers.common = {
    Authorization: 'Bearer ' + response.token
  }
}

function handleLogin (email: string, password: string) {
  const userInfo = {
    email: email,
    password: password
  }
  console.log(userInfo)

  // Autenticando e obtendo o token
  axios.post('https://apimovingtipscore.azurewebsites.net/Auth/login', userInfo)
    .then(res => {
      const response = res.data
      getAuth(response)
    })
}

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const validateLogin = () => {
    if (usersCreated[0] === email) {
      if (usersCreated[1] === password) {
        handleLogin(email, password)
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
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" onSubmit={validateLogin}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Bairro
              </span>
              <Input
                type="email"
                placeholder="Insira o nome do seu bairro aqui"
                className="mt-1"
                id="inputEmail"
                onChange={handleEmail}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Senha
                <Link to="" className="text-sm">
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
