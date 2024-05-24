import React, { useContext, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { ShellContext } from 'contexts/ShellContext';

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext);
  const theme = useTheme();

  useEffect(() => {
    setTitle('Create room');

    // Add event listener for receiving messages from the iframe
    window.addEventListener('message', handleMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [setTitle]);

  // Function to handle messages received from the iframe
  const handleMessage = (event) => {
    // Check if the message is from the iframe
    if (event.source === iframeRef.current.contentWindow) {
      // Check if the message is a link click event
      if (event.data.type === 'linkClick') {
        // Handle the link click here
        // For example, you can navigate to the link URL
        window.location.href = event.data.url;
      }
    }
  };

  // Reference to the iframe element
  const iframeRef = React.useRef(null);

  return (
    <div className="Direct">
      <iframe
        ref={iframeRef}
        src="/direct.html"
        title="Direct HTML"
        style={{ width: '100%', height: '85vh', border: 'none' }}
      />
    </div>
  );
};

