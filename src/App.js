import { useEffect, useState } from "react"
import Header from "./Header"
import Tasks from "./Tasks"
import AddTask from "./AddTask"

export default function App() {
  const [tasks, setTasks] = useState([])
  const [lastId, setLastId] = useState(0)
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    async function getTasks() {
      const tasks = await fetchTasks()
      setTasks(tasks.data)
      setLastId(tasks.lastId)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  async function fetchTasks() {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

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
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask ? (
        <AddTask onAdd={addTask} />
      ) : tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  )
}
