import React, { FC, useState } from "react"
import Input from "shared/Input/Input"

export interface PasswordAndConfirmProps {
  className?: string
}

const PasswordAndConfirm: FC<PasswordAndConfirmProps> = ({ className = "" }) => {
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [passwordError, setPasswordError] = useState('')
  let showErrorPassword = false
  const validatePassword = () => {
    if (pass === confirmPass) {
      setPasswordError('')
      showErrorPassword = false
    } else {
      setPasswordError('Senha é diferente')
      showErrorPassword = true
    }
  }
  const validatePasswordLength = (e: any) => {
    if (e.target.value.length < 6) {
      setPasswordError('Mínimo de 6 caracteres')
      showErrorPassword = true
    } else {
    }
  }
  return (
    <div>
      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Nova Senha
        </span>
        <Input
          type="password"
          className="mt-1"
          onChange={(e) => { setPass(e.target.value) }}
          onBlur={(e) => validatePasswordLength(e)}
          name="password"
        />
      </label>
      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Confirmar Senha
        </span>
        <Input
          type="password"
          className="mt-1"
          onChange={(e) => { setConfirmPass(e.target.value) }}
          onBlur={(e) => validatePassword()}
          name="confirmPassword"
        />
        {showErrorPassword ?? <br/>}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          {passwordError}
        </span>
      </label>
    </div>
  )
}

export default PasswordAndConfirm
