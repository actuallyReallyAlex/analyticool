import React, { useState } from "react"
import SambaContent from "./Samba"
import DeveloperContent from "./Developer"

const contentTypes = {
  samba: SambaContent,
  developer: DeveloperContent
}

const App = () => {
  const [content, setContent] = useState(null)

  const ContentComp = contentTypes[content]
  return (
    <div>
      <h1>User Type</h1>
      <button onClick={() => setContent("samba")}>I am Samba</button>
      <button onClick={() => setContent("developer")}>I am a Developer</button>
      {content && <ContentComp />}
    </div>
  )
}

export default App
