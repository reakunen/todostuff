import React from 'react'
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList"
import {useState, useEffect} from 'react'
import Search from "./components/Search"
import Header from "./components/Header"
import { light } from '@mui/material/styles/createPalette'
import { green, orange } from '@mui/material/colors'
const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'i love monkeys!111', 
      date: '06/21/2004'
    },
    {
      id: nanoid(),
      text: 'i love monkeys!22', 
      date: '06/21/2004'
    },
    {
      id: nanoid(),
      text: 'i love monkeys3!', 
      date: '06/21/2004'
    },
    {
      id: nanoid(),
      text: 'i love monkeys4!', 
      date: '06/21/2004'
    },
    {
      id: nanoid(),
      text: "This was created using React & used icons from the materialui library. This webapp uses localstorage to save the data. ", 
      date: '06/21/2004'
    }
  ])

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => 
      note.id !== id) //for all of the notes that are not the id
    setNotes(newNotes)
  }

  const addNote = (t) => {
    const date = new Date();
    const newNote = {
      text: t,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newNotes = [...notes, newNote] // makes a new array instead of updating new one
    setNotes(newNotes)
  }

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-data'))
    //not NULL (nothing)
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes-data', 
      JSON.stringify(notes))
      console.log("added note... or smtg"); 
  }, [notes])

  const [searchText, setSearchText] = useState("")
  const [toggle, setToggle] = useState(false) //toggle nightmode

  const light = {
    backgroundColor: "#DCD7C9",
    color: "#2C3639"
  }
  const dark = {
    backgroundColor: "#2C3639",
    color: "#DFBB9D" 
  }
  
  return (
    <div className='body' style={toggle ? dark : light}>
    <Header setDarkMode={setToggle} currMode={toggle}/>
    <Search handleSearchNote={setSearchText}/>
      <div className="container">
        <NotesList notes={notes.filter((note) => 
          note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}/>
      </div>
      <footer>Down Bad Industries 2022 &copy;</footer>
    </div>
  )
}

export default App