import { useContext, useEffect } from 'react'

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
