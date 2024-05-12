import { Container } from '@mui/material'
import React from 'react'

const App = () => {
  return (
    <Container
    maxWidth = "md"
    sx={{
      border : 3,
      boxShadow: 5,
      color: '#12f3f5',
      borderRadius: 40,
      textAlign: 'center',
    }}
    >
      <h1>Hola</h1>
    </Container>
  
    
  )
}

export default App

