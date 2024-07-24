import styles from "./TextInput.module.css"

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ placeholder, value, onChange, className, type = "text" }: TextInputProps) => {
  return (
    <div className={styles.textInputWrap}>
      <input
        type={type}
        className={className ? `${styles.textInput} ${className}` : styles.textInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextInput
