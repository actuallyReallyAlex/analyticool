import React, { useState } from "react"

const SambaContent = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [pageName, setPageName] = useState(null)

  return (
    <div>
      <button onClick={() => setIsCreating(true)}>
        Create new technical specification
      </button>
      {isCreating && (
        <form>
          <h1>Techincal Specification Form</h1>
          <label htmlFor="pageName">Page Name</label>
          <input
            id="pageName"
            onChange={e => setPageName(e.target.value)}
            type="text"
          />
          <pre>{JSON.stringify({ pageName }, null, 2)}</pre>
        </form>
      )}
    </div>
  )
}

export default SambaContent
