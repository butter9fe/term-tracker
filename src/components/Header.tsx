import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import type { Hero } from '../hero'

type HeaderProps = {
  hero: Hero
  onEdit: () => void
}

export function Header({ hero, onEdit }: HeaderProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      component="header"
      sx={{ alignItems: 'center' }}
    >
      <Avatar src={hero.avatar} variant="rounded" sx={{ width: 56, height: 56 }} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" color="primary">
          {hero.name}
        </Typography>
      </Box>
      <Button onClick={onEdit} size="small" sx={{ opacity: 0.7 }}>
        Change hero
      </Button>
    </Stack>
  )
}
