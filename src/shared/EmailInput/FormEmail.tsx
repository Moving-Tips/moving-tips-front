import React, { FC, useState } from "react"
import Input from "shared/Input/Input"

export interface EmailInputProps {
  className?: string
}

const EmailInput: FC<EmailInputProps> = ({ className = "" }) => {
  const [emailError, setEmailError] = useState('')
  let showErrorEmail = false
  const validateEmail = (e: any) => {
    const email = e.target.value
    const lastAtPos = email.lastIndexOf("@")
    const lastDotPos = email.lastIndexOf(".")
    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf("@@") === -1 && lastDotPos > 2 && email.length - lastDotPos > 2)) {
      setEmailError('Email é inválido')
      showErrorEmail = false
    } else {
      setEmailError('')
      showErrorEmail = true
    }
  }
  return (
    <label className="block">
      <span className="text-neutral-800 dark:text-neutral-200">
        Email
      </span>
      <Input
        type="email"
        placeholder="exemplo@exemplo.com"
        className="mt-1"
        onBlur={(e) => validateEmail(e)}
        name="email"
      />
      {showErrorEmail ?? <br/>}
      <span className="block text-center text-neutral-700 dark:text-neutral-300">
        {emailError}
      </span>
    </label>
  )
}

export default EmailInput
