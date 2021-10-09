import PropTypes from "prop-types"

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

// default values for props
Header.defaultProps = {
  title: "Task Tracker",
}

// statically typing for props
Header.propTypes = {
  title: PropTypes.string,
  // you can also force a prop to be required by writing
  // title: PropTypes.string.isRequired,
}

export default Header
