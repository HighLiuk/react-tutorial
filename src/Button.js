export default function Button({ color: backgroundColor, text }) {
  return (
    <button className="btn" style={{ backgroundColor }}>
      {text}
    </button>
  )
}
