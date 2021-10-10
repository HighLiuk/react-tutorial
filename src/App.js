import { useState } from "react"
import Header from "./Header"
import Tasks from "./Tasks"
import AddTask from "./AddTask"

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [lastId, setLastId] = useState(tasks.length)

  // Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  function toggleReminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    )
  }

  // Add Task
  function addTask(task) {
    setLastId(lastId + 1)
    setTasks([...tasks, { id: lastId + 1, ...task }])
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  )
}

const initialTasks = [
  {
    id: 1,
    text: "Doctor's Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 2:30pm",
    reminder: false,
  },
]
