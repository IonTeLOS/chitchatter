import { ChangeEvent, useState, SyntheticEvent } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface PasswordPromptProps {
  isOpen: boolean
  onPasswordEntered: (password: string) => void
}

export const PasswordPrompt = ({
  isOpen,
  onPasswordEntered,
}: PasswordPromptProps) => {
  const [password, setPassword] = useState('')

  const handleFormSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    onPasswordEntered(password)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <Dialog open={isOpen}>
      <form onSubmit={handleFormSubmit}>
        <DialogTitle>Room Password</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            You will only be able to connect to room peers that enter the same
            password.
          </DialogContentText>
          <DialogContentText>
            No error is shown in case of a mismatch. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" disabled={password.length === 0}>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
