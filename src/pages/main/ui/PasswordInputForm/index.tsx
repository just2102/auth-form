import { useState } from "react"

import Button from "src/shared/ui/Button"
import FormWrapper from "src/shared/ui/FormWrapper"
import PasswordInput from "src/shared/ui/PasswordInput"

import styles from "./PasswordInputForm.module.css"

interface PasswordInputFormProps {
  email: string
  onSubmit: (password: string) => void
}

const PasswordInputForm = ({ email, onSubmit }: PasswordInputFormProps) => {
  const [password, setPassword] = useState<string>("")

  return (
    <FormWrapper
      onSubmit={() => {
        onSubmit(password)
      }}
    >
      <div className={styles.passwordInputForm}>
        <h3>Enter your password for {email}:</h3>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text={"Log in"}
          type='submit'
        />
      </div>
    </FormWrapper>
  )
}

export default PasswordInputForm
