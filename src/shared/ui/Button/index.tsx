import styles from "./Button.module.css"

interface ButtonProps {
  onClick?: () => void
  text?: React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

const Button = ({ onClick, text, className, type, children, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className ? `${styles.button} ${className}` : styles.button}
      type={type || "button"}
      disabled={disabled}
    >
      {children ? children : text}
    </button>
  )
}

export default Button
