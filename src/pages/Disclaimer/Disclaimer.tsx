import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { ShellContext } from 'contexts/ShellContext';

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext);
  const theme = useTheme();
  const [htmlFileString, setHtmlFileString] = useState('');

  useEffect(() => {
    setTitle('Create room');
    
    const fetchHtml = async () => {
      try {
        const response = await fetch('/direct.html');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        setHtmlFileString(text);
      } catch (error) {
        console.error('Failed to fetch HTML:', error);
      }
    };

    fetchHtml();
  }, [setTitle]);

  return (
    <div className="Direct">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
};

