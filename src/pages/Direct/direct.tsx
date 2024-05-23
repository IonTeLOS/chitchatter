import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const publicRoomButton = document.getElementById('public-room');
    const privateRoomButton = document.getElementById('private-room');
    const uuid = generateUUID();

    publicRoomButton?.addEventListener('click', () => {
      navigate(`https://pchat.xyz/public/${uuid}`);
    });

    privateRoomButton?.addEventListener('click', () => {
      navigate(`https://pchat.xyz/private/${uuid}`);
    });

    return () => {
      publicRoomButton?.removeEventListener('click', () => {
        navigate(`https://pchat.xyz/public/${uuid}`);
      });
      privateRoomButton?.removeEventListener('click', () => {
        navigate(`https://pchat.xyz/private/${uuid}`);
      });
    };
  }, [navigate]);

  const generateUUID = () => {
    return uuidv4();
  };

  return (
    <div style={styles.container}>
      <button id="public-room" style={styles.button}>Create room</button>
      <button id="private-room" style={styles.button}>Create room + password</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box' as const,
    backgroundColor: '#f5f5f5',
  },
  button: {
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonHover: {
    backgroundColor: '#1565c0',
  },
};

export default Home;
