import { useState } from "react"

function AddTask({ onAdd }) {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  function onSubmit(e) {
    e.preventDefault()

    if (!text) {
      alert("Please add a task")
      return
    }

    onAdd({ text, day, reminder })
    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
      </div>

      <div className="form-control">
        <label>Day &amp; Time</label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Add Day &amp; Time"
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask
