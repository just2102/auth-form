import Button from "src/shared/ui/Button"
import Snackbar from "src/shared/ui/Snackbar"

import styles from "./SuccessScreen.module.css"

interface SuccessScreenProps {
  onBack: () => void
}

const SuccessScreen = ({ onBack }: SuccessScreenProps) => {
  return (
    <div className={styles.successScreen}>
      <h3>Success!</h3>
      <p>You have successfully logged in. Enjoy our website!</p>

      <Button
        onClick={onBack}
        text={"Log out"}
      />

      <Snackbar
        message={"Yay! You're logged in!"}
        type='success'
      />
    </div>
  )
}

export default SuccessScreen
