import "react-bootstrap"
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NewNote from "./NewNote";


function App() {

return (
    <Container className="my-4">
      <Router>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/new" element={<NewNote/>} />
          <Route path="/:id">
            <Route index element={<h1>Show</h1>} />
            <Route path="edit" element={<h1>Edit</h1>} />
          </Route>
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
