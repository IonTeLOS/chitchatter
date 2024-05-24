import React, { useContext, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { ShellContext } from 'contexts/ShellContext';

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext);
  const theme = useTheme();

  useEffect(() => {
    setTitle('Create room');
  }, [setTitle]);

  return (
    <div className="Direct">
      <iframe src="/direct.html" title="Direct HTML" style={{ width: '100%', height: '100vh', border: 'none' }} />
    </div>
  );
};
