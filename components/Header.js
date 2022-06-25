import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Header = ({setDarkMode, currMode}) => {
  return (
    <div className="header">
        <h1 className='bigboy'>Notes</h1>
        <Brightness4Icon className='toggle'
         style={{fontSize: 37.5}}
         onClick={() => {
            console.log(currMode)
            setDarkMode(!currMode)
         }}
        />
    </div>
  )
}

export default Header