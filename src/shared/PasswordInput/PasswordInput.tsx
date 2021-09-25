import React, { FC, useState } from "react"
import Input from "shared/Input/Input"

export interface PasswordProps {
  className?: string
}

const PasswordInput: FC<PasswordProps> = ({ className = "" }) => {
  const [passwordError, setPasswordError] = useState('')
  let showErrorPassword = false
  const validatePasswordLength = (e: any) => {
    if (e.target.value.length < 6) {
      setPasswordError('Minimum of 6 characters')
      showErrorPassword = true
    }
  }
  return (
    <div>
      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Senha
        </span>
        <Input
          role="password"
          type="password"
          className="mt-1"
          onBlur={(e) => validatePasswordLength(e)}
        />
      </label>
      {showErrorPassword ?? <br/>}
      <span className="block text-center text-neutral-700 dark:text-neutral-300">
        {passwordError}
      </span>
    </div>
  )
}

export default PasswordInput
