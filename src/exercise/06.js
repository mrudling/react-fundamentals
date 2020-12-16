// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null)
  // const [disabled, setDisabled] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const inputEl = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    const username = inputEl.current.value
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const value = event.target.value
    setUsername(value.toLowerCase())

    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
    // setDisabled(!isValid)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="textInput">Username:</label>
        <input ref={inputEl} type="text" onChange={handleChange} value={username}/>
      </div>
      {/* <button disabled={disabled} type="submit"> */}
      <button type="submit">
        Submit
      </button>
      {/* <div style={{color: 'red'}}>{error}</div> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
