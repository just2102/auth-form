import { useEffect, useState } from "react"

import styles from "./Snackbar.module.css"

import Button from "../Button"

interface SnackbarProps {
  message: string
  onClose?: () => void
  type?: "error" | "info" | "success"
}

const Snackbar = ({ message, onClose, type = "info" }: SnackbarProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)

      if (onClose) {
        setTimeout(() => {
          onClose()
        }, 500)
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`${styles.snackbar} ${styles[type]} ${visible ? styles.show : ""}`}>
      <span className={styles.message}>{message}</span>
      {onClose && (
        <Button
          className={styles.closeButton}
          onClick={onClose}
        >
          &times;
        </Button>
      )}
    </div>
  )
}

export default Snackbar
