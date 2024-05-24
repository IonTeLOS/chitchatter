import { useContext, useEffect } from 'react'
import { ShellContext } from 'contexts/ShellContext'

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext)
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
