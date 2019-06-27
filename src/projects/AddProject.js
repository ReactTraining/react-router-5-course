import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'
import Card from '../../ui/Card'

const AddProject = () => {
  const [formIsDirty, setFormIsDirty] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <Card style={{ minHeight: '20em' }}>
      <Prompt when={formIsDirty} message="Are you sure you want to leave this form before saving?" />
      <form className="spacing" onSubmit={handleSubmit}>
        <input onChange={() => setFormIsDirty(true)} type="text" placeholder="Project Name" required />
        <button type="submit" className="button">
          Add Project
        </button>
      </form>
    </Card>
  )
}

export default AddProject
