import { useContext, useEffect } from 'react'
import Box from '@mui/material/Box'
import MuiMarkdown from 'mui-markdown'
import useTheme from '@mui/material/styles/useTheme'
import { v4 as uuidv4 } from 'uuid';

import { ShellContext } from 'contexts/ShellContext'

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext)
  const theme = useTheme()

  useEffect(() => {
    setTitle('Create Room')
  }, [setTitle])

const App: React.FC = () => {
  const uuid = uuidv4();

  const handlePublicRoomClick = () => {
    window.location.href = `https://pchat.xyz/public/${uuid}`;
  };

  const handlePrivateRoomClick = () => {
    window.location.href = `https://pchat.xyz/private/${uuid}`;
  };
  
  return (
    <div style={styles.container}>
      <button onClick={handlePublicRoomClick} style={styles.btn}>
        Create room
      </button>
      <button onClick={handlePrivateRoomClick} style={styles.btn}>
        Create room + password
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: '#f5f5f5',
    margin: 0,
    padding: 0,
  },
  btn: {
    width: '80%',
    maxWidth: '300px',
    padding: '20px',
    margin: '10px',
    fontSize: '18px',
    color: 'white',
    backgroundColor: '#1976d2',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHover: {
    backgroundColor: '#1565c0',
  },
  media: {
    '@media (min-width: 600px)': {
      btn: {
        fontSize: '20px',
        padding: '25px',
      },
    },
  },
};
}
