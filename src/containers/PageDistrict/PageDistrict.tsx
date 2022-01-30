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
import { isTemplateLiteralToken } from "typescript"
export interface PageDistrictProps {
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

const PageDistrict: FC<PageDistrictProps> = ({ className = "" }) => {
  const history = useHistory()

  const auth = {
    Email: "user@example.com",
    Password: "string"
  }

  // Autenticando e obtendo o token
  axios.post('https://apimovingtipscore.azurewebsites.net/Auth/login', auth)
    .then(res => {
      const response = res.data
      getAuth(response)
    })

  const insertLocation = (e: any) => {
    const bairro = e.target.elements.inputBairro.value
    const descricao = e.target.elements.inputDescricao.value
    const cidade = e.target.elements.inputCidade.value
    const estado = e.target.elements.inputEstado.value
    const pais = e.target.elements.inputPais.value

    const location = {
      name: bairro,
      description: descricao,
      city: cidade,
      state: estado,
      country: pais
    }

    axios.post('https://apimovingtipscore.azurewebsites.net/Districts', location)
      .then(res => {
        alert(`Bairro inserido com sucesso`)
        history.push("/")
      })
      .catch(function (error) {
        console.log(error.toJSON())
        alert("Credenciais inválidas!!")
      })
  }

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Encontre seu novo lar</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" onSubmit={insertLocation}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Bairro
              </span>
              <Input
                placeholder="Insira o nome do seu bairro aqui"
                className="mt-1"
                id="inputBairro"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Descrição
              </span>
              <Input id="inputDescricao" className="mt-1"/>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Cidade
              </span>
              <Input id="inputCidade" className="mt-1"/>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Estado
              </span>
              <Input id="inputEstado" className="mt-1"/>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                País
              </span>
              <Input id="inputPais" className="mt-1"/>
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

export default PageDistrict
