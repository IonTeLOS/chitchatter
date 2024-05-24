import { useContext, useEffect, useState } from 'react';
import { ShellContext } from 'contexts/ShellContext';

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext);
  const [htmlFileString, setHtmlFileString] = useState('');

  async function fetchHtml() {
    const response = await fetch('direct.html');
    const text = await response.text();
    setHtmlFileString(text);
  }

  useEffect(() => {
    fetchHtml();
  }, []);

  return (
    <div className="Direct">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
};

