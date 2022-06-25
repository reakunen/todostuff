import React from 'react'
import Note from "./Note"
import AddNote from './AddNote'
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    //going to map the notes.
  return (
    <div className='notes-list'>
      {notes.map((note) => 
        <Note id={note.id} 
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      )}
      <AddNote handleAddNote={handleAddNote}/>

    </div>
  )
}

export default NotesList