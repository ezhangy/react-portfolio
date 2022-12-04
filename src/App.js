import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

const App = () => {
  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Routes>
        <Route path="/notes" element={<>notes</>} />
        <Route path="/users" element={<>user</>} />
        <Route path="/" element={<>Projects</>} />
      </Routes>

      <div>
        <p>Hello!</p>
      </div>
    </Router>
  )
}

export default App