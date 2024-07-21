import styles from "./FormWrapper.module.css"

interface FormWrapperProps {
  onSubmit: (...args: any) => void
  children: React.ReactNode
}

const FormWrapper = ({ onSubmit, children }: FormWrapperProps) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={handleFormSubmit}
      >
        {children}
      </form>
    </div>
  )
}

export default FormWrapper
