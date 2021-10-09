import PropTypes from "prop-types"

function Button({ color: backgroundColor, text }) {
  return (
    <button className="btn" style={{ backgroundColor }}>
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
}

export default Button
