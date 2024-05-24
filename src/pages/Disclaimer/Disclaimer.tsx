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

  return (
    <Box
      className="Disclaimer"
      sx={{
        p: 2,
        mx: 'auto',
        maxWidth: theme.breakpoints.values.md,
        '& p': {
          mb: 2,
        },
      }}
    >
      <MuiMarkdown>
        {`
### Interpretation and Definitions

#### Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

#### Definitions

For the purposes of this Disclaimer:

*   **Project** (referred to as either "the Project", "We", "Us" or "Our" in this Disclaimer) refers to Chitchatter.
*   **Service** refers to the Website.
*   **You** means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
*   **Website** refers to Chitchatter, accessible from [https://chitchatter.im](https://chitchatter.im)

### Disclaimer

The information contained on the Service is for general information purposes only.

The Project assumes no responsibility for errors or omissions in the contents of the Service.

In no event shall the Project be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Project reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.

The Project does not warrant that the Service is free of viruses or other harmful components.

#### External Links Disclaimer

The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Project.

Please note that the Project does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.

#### Errors and Omissions Disclaimer

The information given by the Service is for general guidance on matters of interest only. Even if the Project takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.

The Project is not responsible for any errors or omissions, or for the results obtained from the use of this information.

#### Views Expressed Disclaimer

The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Project.

Messages sent by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a message. The Project is not liable for any messages sent by users.

#### No Responsibility Disclaimer

In no event shall the Project or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.

#### "Use at Your Own Risk" Disclaimer

All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.

The Project will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
`}
      </MuiMarkdown>
    </Box>
  )
}

