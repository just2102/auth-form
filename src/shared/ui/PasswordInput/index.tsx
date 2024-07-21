import styles from "./PasswordInput.module.css"

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = ({ value, onChange, placeholder, autoComplete }: PasswordInputProps) => {
  return (
    <div className={styles.passwordInputWrap}>
      <input
        type='password'
        className={styles.passwordInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default PasswordInput
