import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'
import Card from '../../ui/Card'

const AddUser = () => {
  const [formIsDirty, setFormIsDirty] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <Card style={{ minHeight: '20em' }}>
      <Prompt when={formIsDirty} message="Are you sure you want to leave this form before saving?" />
      <form className="spacing" onSubmit={handleSubmit}>
        <input onChange={() => setFormIsDirty(true)} type="text" placeholder="Email" required />
        <input onChange={() => setFormIsDirty(true)} type="password" placeholder="Password" required />
        <button type="submit" className="button">
          Add User
        </button>
      </form>
    </Card>
  )
}

export default AddUser
