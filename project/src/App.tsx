import { useState } from 'react'
import { CreateAnnouncement } from './components/Modal/CreateAnnouncement'
import GlobalStyle from './globalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <GlobalStyle />
        <CreateAnnouncement />

    </>
    )
}

export default App
