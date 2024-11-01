import "./Button.css"

const Button = ({ text, type }: any) => {
  return (
    <button type="button" className={type}>
      { text }
    </button>
  )
}

export default Button;