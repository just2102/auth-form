import { useState } from "react"

import Button from "src/shared/ui/Button"
import FormWrapper from "src/shared/ui/FormWrapper"
import PasswordInput from "src/shared/ui/PasswordInput"
import TextInput from "src/shared/ui/TextInput"

import styles from "./EmailInputForm.module.css"

interface EmailInputFormProps {
  onSubmit: (_email: string) => Promise<void>
  emailExists: boolean
}

const EmailInputForm = ({ onSubmit, emailExists }: EmailInputFormProps) => {
  const [email, setEmail] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async () => {
    setDisabled(true)

    if (emailExists) {
      await onSubmit(password)
    } else {
      await onSubmit(email)
    }

    setDisabled(false)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className={styles.emailInputForm}>
        <h3>Enter your email to log in or register</h3>
        <TextInput
          id='myemail'
          placeholder='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='username'
          aria-label='email'
          className={emailExists ? styles.hidden : ""}
        />

        <PasswordInput
          placeholder='Password'
          autoComplete='current-password'
          className={!emailExists ? styles.hidden : ""}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          disabled={disabled}
          text={emailExists ? "Log in" : "Next"}
          type='submit'
        />
      </div>
    </FormWrapper>
  )
}

export default EmailInputForm
