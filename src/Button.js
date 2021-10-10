import PropTypes from "prop-types"

function Button({ color: backgroundColor, text, onClick }) {
  return (
    <button onClick={onClick} className="btn" style={{ backgroundColor }}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: "steelblue",
}

Button.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
