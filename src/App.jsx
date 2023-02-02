// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import './App.css'
import { ThemeProvider, useTheme } from '@mui/material'


function App() {
  
const theme = useTheme()


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  )
}

export default App
