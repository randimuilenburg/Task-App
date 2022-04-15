import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Walk the dog",
      day: "Friday, April 15th at 6:00pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Finish book club book",
      day: "Monday, April 25th at 6:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Pick up groceries",
      day: "Thursday, April 14th at 11:00am",
      reminder: true,
    },
    {
      id: 4,
      text: "Order book for nephew",
      day: "Wednesday, April 13th at 7:00pm",
      reminder: true,
    },
    {
      id: 5,
      text: "Give dog his heartworm prevention",
      day: "Wednesday, April 20th at 9:00am",
      reminder: true,
    },
  ]);
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminders
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "You finished everything. Go play with the dog! :)"
      )}
    </div>
  );
}

export default App;
