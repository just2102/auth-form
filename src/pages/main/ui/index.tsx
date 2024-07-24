import { useState } from "react"

import { useDevice } from "src/shared/hooks/useDevice"
import { FormViews } from "src/shared/types"
import BackButton from "src/shared/ui/BackButton"
import Button from "src/shared/ui/Button"
import Snackbar from "src/shared/ui/Snackbar"
import { validEmail } from "src/shared/utils/validation"

import EmailInputForm from "./EmailInputForm"
import styles from "./MainPage.module.css"
import RegistrationForm from "./RegistrationForm"
import SuccessScreen from "./SuccessScreen"

import { checkEmail } from "../api/checkEmail"
import { login } from "../api/login"
import { register } from "../api/register"

const MainPage = () => {
  const { isDesktop, isTablet } = useDevice()

  const [formView, setFormView] = useState<FormViews>(FormViews.Main)
  const [email, setEmail] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [emailExists, setEmailExists] = useState<boolean>(false)

  const handleEmailClick = () => {
    setFormView(FormViews.EmailInput)
    setErrorMessage(null)
  }

  const handleEmailSubmit = async (_email: string) => {
    setEmail(_email)
    setErrorMessage(null)

    if (!validEmail(_email)) {
      setErrorMessage("Invalid email")

      return
    }

    const emailExist = await checkEmail(_email)
    if (emailExist) {
      setEmailExists(true)
    } else {
      setFormView(FormViews.Registration)
    }
  }

  const handlePasswordSubmit = async (password: string) => {
    setErrorMessage(null)
    try {
      const isSuccess = await login(email, password)
      if (isSuccess) {
        setFormView(FormViews.Success)
      } else {
        setErrorMessage("Incorrect password")
      }
    } catch (err) {
      console.error(err)
      setErrorMessage("An error occurred during login")
    } finally {
      setEmailExists(false)
    }
  }

  const handleRegistrationSubmit = async (email: string, password: string, repeatPassword: string) => {
    setErrorMessage(null)
    if (password === repeatPassword) {
      try {
        await register(email, password)
        setFormView(FormViews.Success)
      } catch (err) {
        setErrorMessage("An error occurred during registration")
      }
    } else {
      setErrorMessage("Passwords do not match")
    }
  }

  const handleBackClick = () => {
    setFormView(FormViews.Main)
    setErrorMessage(null)
  }

  return (
    <div className={styles.mainPage}>
      {(isDesktop || isTablet) && <div className={styles.gifViewer}></div>}

      <div className={styles.mainPage_content}>
        {formView !== FormViews.Main && formView !== FormViews.Success && <BackButton onBack={handleBackClick} />}
        {formView === FormViews.Main && (
          <>
            <h3>Happy to see you!</h3>
            <h4>Sign up or log in:</h4>
            <Button
              text={"Continue with email"}
              onClick={handleEmailClick}
            />
          </>
        )}
        {formView === FormViews.EmailInput && (
          <EmailInputForm
            emailExists={emailExists}
            onSubmit={emailExists ? handlePasswordSubmit : handleEmailSubmit}
          />
        )}
        {formView === FormViews.Registration && (
          <RegistrationForm
            email={email}
            onSubmit={handleRegistrationSubmit}
            setEmail={setEmail}
          />
        )}

        {formView === FormViews.Success && <SuccessScreen onBack={handleBackClick} />}

        {errorMessage && (
          <Snackbar
            message={errorMessage}
            onClose={() => setErrorMessage(null)}
            type='error'
          />
        )}
      </div>
    </div>
  )
}

export default MainPage
