import styles from "./BackButton.module.css"

const BackButton = ({ onBack }: { onBack: () => void }) => {
  return (
    <button
      className={styles.backButton}
      onClick={onBack}
    >
      <svg
        className={styles.icon}
        viewBox='0 0 800 800'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M798.701 588.539C768.144 458.306 673.014 276.858 385.292 238.526V123.686C385.292 99.7455 370.794 78.1746 348.662 69.0478C326.529 59.9034 301.062 65.0285 284.16 81.9833L22.9048 344.537C-7.61737 375.217 -7.63492 424.783 22.8872 455.463L284.16 718.017C301.027 734.971 326.547 740.097 348.679 730.952C370.812 721.808 385.309 700.237 385.309 676.314V565.195C483.475 565.318 624.993 578.236 725.669 640.895C742.396 651.321 763.721 650.636 779.728 639.122C795.7 627.679 803.212 607.705 798.701 588.539Z'
          fill='#FDFDFD'
        />
      </svg>
    </button>
  )
}

export default BackButton
