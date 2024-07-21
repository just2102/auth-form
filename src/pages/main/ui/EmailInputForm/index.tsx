import { useState } from "react"

import Button from "src/shared/ui/Button"
import FormWrapper from "src/shared/ui/FormWrapper"
import TextInput from "src/shared/ui/TextInput"

import styles from "./EmailInputForm.module.css"

interface EmailInputFormProps {
  onSubmit: (email: string) => void
}

const EmailInputForm = ({ onSubmit }: EmailInputFormProps) => {
  const [email, setEmail] = useState<string>("")

  return (
    <FormWrapper
      onSubmit={() => {
        onSubmit(email)
      }}
    >
      <div className={styles.emailInputForm}>
        <h3>Enter your email to log in or register</h3>
        <TextInput
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          text={"Continue"}
          type='submit'
        />
      </div>
    </FormWrapper>
  )
}

export default EmailInputForm
