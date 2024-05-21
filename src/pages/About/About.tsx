import { useContext, useEffect } from 'react'
import MuiMarkdown from 'mui-markdown'
import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import { ShellContext } from 'contexts/ShellContext'
import {
  messageTranscriptSizeLimit,
  messageCharacterSizeLimit,
} from 'config/messaging'

const messageTranscriptSizeLimitFormatted = Intl.NumberFormat().format(
  messageTranscriptSizeLimit
)

const messageCharacterSizeLimitFormatted = Intl.NumberFormat().format(
  messageCharacterSizeLimit
)

export const About = () => {
  const { setTitle } = useContext(ShellContext)
  const theme = useTheme()

  useEffect(() => {
    setTitle('About')
  }, [setTitle])

  return (
    <Box
      className="About"
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
### User Guide

PChat is a peer to peer communication tool designed to make secure and private communication accessible to all. Please [see the README](https://github.com/iontelos/chitchatter/blob/develop/README.md) for full project documentation.

You can access the rooms from any device using a common browser.

No central server is used to exchange or store messages or other data shared by users. 

#### Chat rooms

Public rooms can be joined by **anyone** with the room URL. By default, rooms are given a random and unguessable name. You can name your room whatever you'd like, but keep in mind that simpler room names are more guessable by others. For maximum security, consider using the default room name.

Private rooms can only be joined by peers with a matching password. The password must be mutually agreed upon before joining. If peers submit mismatching passwords, they will be in the room but be unable to connect to each other. **No error will be shown** if there is a password mismatch because there is no central arbitrating mechanism by which to detect the mismatch.

To connect to others, share the room URL in a secure way. You will be notified when others join the room.

##### Peer verification

When you connect with a peer, PChat automatically attempts to use [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) to verify them. You can see everyone's public keys in the peer list. Feel free to share your public key with others (it is not sensitive information) so that they can uniquely identify you.

All public and private keys are generated locally. Your private key is never sent to any peer or server.

##### Conversation backfilling

Conversation transcripts are erased from local memory as soon as you close the page or navigate away from the room. Conversations are only ever held in volatile memory and never persisted to any disk by PChat.

When a peer joins a **public** room with participants already in it, the new peer will automatically request the transcript of the conversation that has already taken place from the other peers. Once all peers leave the room, the conversation is completely erased. Peers joining a **private** room will not get the conversation transcript backfilled.

Chat transcript history is limited to ${messageTranscriptSizeLimitFormatted} messages for all rooms.

#### Message Authoring

Chat messages support [GitHub-flavored Markdown](https://github.github.com/gfm/) with code syntax highlighting.

Press \`Enter\` to send a message. Press \`Shift + Enter\` to insert a line break. Message size is limited to ${messageCharacterSizeLimitFormatted} characters.

-----------------------------------------------------------------------------------------------------------------------------

#### Legal Disclaimer

### Definitions

For the purposes of this Disclaimer:

*   **Project** (referred to as either "the Project", "We", "Us" or "Our" in this Disclaimer) refers to PChat.
*   **Website** refers to Chitchatter, accessible from [https://pchat.xyz](https://pchat.xyz)
*   **Service** refers to the Website.
*   **You** means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

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
