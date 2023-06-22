import { Row } from "react-bootstrap"
import { useNote } from "./NoteLayout"

export function Note() {
  const note = useNote()

  return <>
    <Row></Row>
  </>
}