import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
        <span className='text-size'>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <DeleteIcon className='delete-icon'
                onClick={() => handleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default Note