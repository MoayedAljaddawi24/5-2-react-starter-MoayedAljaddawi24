import './App.css'
import StudentCard from './components/StudentCard'
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <StudentCard name="Moayed" id = "202248800" dep = "computer science" />
          <StudentCard name="Ahmed" id = "202246707" dep = "mechanical engineering" />    
        </div>
      </main>
    </div>
  )
}

export default App
