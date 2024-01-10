import TodoApp from "./components/TodoApp"
import { TodoContextProvider } from "./src/contexts/TodoContext"

function App() {
  return (
    <div className="app">
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </div>
  )
}

export default App
