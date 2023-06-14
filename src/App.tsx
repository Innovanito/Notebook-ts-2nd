import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap"
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NewNote from "./NewNote";
import { useLocalStorage } from "./uesLocalStorage";

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}


function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []) // (label, default initial value)

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
