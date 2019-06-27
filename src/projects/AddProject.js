import React, { useState } from 'react'
import { Link, Prompt } from 'react-router-dom'
import Card from '../ui/Card'

const AddProject = ({ location }) => {
  const [formIsDirty, setFormIsDirty] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Card style={{ minHeight: '15em' }}>
      <Prompt when={formIsDirty} message="Are you sure you want to leave this form before saving?" />
      <form className="spacing" onSubmit={handleSubmit}>
        <input onChange={() => setFormIsDirty(true)} type="text" placeholder="Project Name" required />
        <footer className="horizontal-spacing">
          <button type="submit" className="button">
            Add Project
          </button>
          <Link to={(location.state && location.state.cancelPathname) || '/projects'}>Cancel</Link>
        </footer>
      </form>
    </Card>
  )
}

export default AddProject
