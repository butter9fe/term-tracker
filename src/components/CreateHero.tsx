import { Avatar, Button, Stack, TextField, Typography } from '@mui/material'
import { useState, type SubmitEvent } from 'react'
import { AVATARS, type Hero } from '../hero'

type CreateHeroProps = {
  onCreate: (hero: Hero) => void
}

export function CreateHero({ onCreate }: CreateHeroProps) {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(AVATARS[0])

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    if (name.trim() === '') return
    onCreate({ name: name.trim(), avatar })
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      spacing={2}
      sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 2 }}
    >
      <Typography variant="h4" color="primary">
        Create your hero
      </Typography>
      <TextField
        label="Hero name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        Pick your photo
      </Typography>
      
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
        {AVATARS.map((src) => (
          <Avatar
            key={src}
            component="button"
            type="button"
            onClick={() => setAvatar(src)}
            src={src}
            variant="rounded"
            sx={{
              width: 64,
              height: 64,
              cursor: 'pointer',
              border: 'none',
              p: 0,
              opacity: src === avatar ? 1 : 0.5,
              outline: src === avatar ? '3px solid' : 'none',
              outlineColor: 'primary.main',
            }}
          />
        ))}
      </Stack>
      <Button type="submit" variant="contained" size="large" fullWidth>
        Start the semester
      </Button>
    </Stack>
  )
}
