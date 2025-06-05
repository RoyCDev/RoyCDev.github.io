import Navbar from "./components/NavBar"
import { Outlet } from "react-router"
import ProjectList from "./components/ProjectList"

function App() {
  return (
    <div className="max-w-320 mx-auto px-8 sm:px-12 lg:px-16">
      <Navbar />
      <main className="lg:flex gap-20">
        <div className="flex-1"><Outlet /></div>
        <div className="lg:w-95">
          <h2 className="text-lg sm:text-xl font-medium mb-3">My Projects</h2>
          <ProjectList />
        </div>
      </main>
    </div>
  )
}

export default App

