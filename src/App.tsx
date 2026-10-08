import { Box } from '@mui/material'
import { useState } from 'react'
import { CreateHero } from './components/CreateHero'
import { Header } from './components/Header'
import type { Hero } from './hero'

function App() {
  // State: data that changes. Changing it re-draws the screen.
  const [hero, setHero] = useState<Hero | null>(null)

  // No hero yet? Show the create-hero screen instead of the app
  if (hero === null) {
    return <CreateHero onCreate={setHero} />
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Header hero={hero} onEdit={() => setHero(null)} />
    </Box>
  )
}

export default App
