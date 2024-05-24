import { useContext, useEffect } from 'react'
import useTheme from '@mui/material/styles/useTheme'

import { ShellContext } from 'contexts/ShellContext'

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext)
  const theme = useTheme()

  useEffect(() => {
    setTitle('Create room')
  }, [setTitle])

  return (
            <a href="/direct.html" target="_blank">
                Create room
            </a>
    )
}
