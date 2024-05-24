import { useContext, useEffect } from 'react'
import useTheme from '@mui/material/styles/useTheme'
import { ShellContext } from 'contexts/ShellContext'

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext)
  const theme = useTheme()

  useEffect(() => {
    setTitle('Create room')
  }, [setTitle])

function Direct() {
  let[htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`direct.htmt`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);
  
  return(
    <div className="Direct">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default Direct;
