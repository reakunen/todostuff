import React from 'react'
import {useState, useEffect} from 'react' 

const AddNote = ({handleAddNote, handleDeleteNote}) => {
    const [noteText, setNoteText] = useState("")
    const handleSaveClick = () => {
        if (noteText.trim().length > 0)
        {
            handleAddNote(noteText)
            setNoteText("")
        }
    }
    const handleChange = async (e) => {
        if (charLimit - noteText.length < 1) 
            return 

        setNoteText(e.target.value) 
    }
    const charLimit = 200; 
  return (
    <div className="note new">
        <textarea name="" id="" cols="30" rows="10"
        placeholder='Type to enter note...'
        onChange={handleChange}
        value={noteText} className='text-size'>

        </textarea>
        <div className="note-footer">
            <small>{charLimit - noteText.length} Remaining</small>
            <button className='save'
                onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote