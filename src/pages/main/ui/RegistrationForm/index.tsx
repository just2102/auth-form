import { useState } from "react"

import Button from "src/shared/ui/Button"
import FormWrapper from "src/shared/ui/FormWrapper"
import PasswordInput from "src/shared/ui/PasswordInput"
import TextInput from "src/shared/ui/TextInput"

import styles from "./RegistrationForm.module.css"

interface RegistrationFormProps {
  email: string
  onSubmit: (email: string, password: string, repeatPassword: string) => void
  setEmail: (email: string) => void
}

const RegistrationForm = ({ email, onSubmit, setEmail }: RegistrationFormProps) => {
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")

  return (
    <FormWrapper
      onSubmit={() => {
        onSubmit(email, password, repeatPassword)
      }}
    >
      <div className={styles.registrationForm}>
        <h3>
          Glad you're with us! <br /> Please set a password for your account:
        </h3>
        <TextInput
          type='email'
          autoComplete='username'
          aria-label='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
        />
        <PasswordInput
          value={password}
          placeholder='Set a password'
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='new-password'
        />

        <PasswordInput
          value={repeatPassword}
          placeholder='Repeat password'
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <Button
          text={"Register"}
          type='submit'
        />
      </div>
    </FormWrapper>
  )
}

export default RegistrationForm
