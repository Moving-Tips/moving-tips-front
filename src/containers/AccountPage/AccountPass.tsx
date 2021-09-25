import Label from "components/Label/Label"
import ButtonPrimary from "shared/Button/ButtonPrimary"
import Input from "shared/Input/Input"
import CommonLayout from "./CommonLayout"
import PasswordAndConfirm from "../../shared/PasswordAndConfirm/PasswordAndConfirm"
import React from "react"
import PasswordInput from "../../shared/PasswordInput/PasswordInput"

const AccountPass = () => {
  return (
    <div>
      <CommonLayout>
        <div className="space-y-6 sm:space-y-8">
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Troque sua senha</h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"/>
          <div className=" max-w-xl space-y-6">
            <PasswordInput/>
            <PasswordAndConfirm />
            <div className="pt-2">
              <ButtonPrimary>Atualizar senha</ButtonPrimary>
            </div>
          </div>
        </div>
      </CommonLayout>
    </div>
  )
}

export default AccountPass
