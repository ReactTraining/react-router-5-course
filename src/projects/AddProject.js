import React from 'react'
import Card from '../ui/Card'

const AddProject = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Card style={{ minHeight: '15em' }}>
      <form className="spacing" onSubmit={handleSubmit}>
        <input type="text" placeholder="Project Name" required />
        <button type="submit" className="button">
          Add Project
        </button>
      </form>
    </Card>
  )
}

export default AddProject
