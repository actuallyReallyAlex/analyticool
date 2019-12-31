import React, { useState } from "react"

const contentTypes = {
  samba: <span>SAMBA CONTENT</span>,
  developer: <span>DEVELOPER CONTENT</span>,
}

const App = () => {
  const [content, setContent] = useState(null)
  return (
    <div>
      <h1>User Type</h1>
      <button onClick={() => setContent("samba")}>I am Samba</button>
      <button onClick={() => setContent("developer")}>I am a Developer</button>
      {contentTypes[content]}
    </div>
  )
}

export default App
