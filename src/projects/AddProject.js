import React, { useState } from 'react'
import { Link, Prompt } from 'react-router-dom'
import Card from '../ui/Card'

const AddProject = ({ location }) => {
  const [isDirty, setIsDirty] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Card style={{ minHeight: '15em' }}>
      <Prompt when={isDirty} message="Are you sure you want to leave an unsaved form?" />
      <form className="spacing" onSubmit={handleSubmit}>
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Project Name" required />
        <footer className="horizontal-spacing">
          <button type="submit" className="button">
            Add Project
          </button>
          <Link to={(location.state && location.state.returnPathname) || '/projects'}>Cancel</Link>
        </footer>
      </form>
    </Card>
  )
}

export default AddProject
