import React from 'react'
import Card from '../../ui/Card'

const AddUser = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Card style={{ minHeight: '20em' }}>
      <form className="spacing" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="button">
          Add User
        </button>
      </form>
    </Card>
  )
}

export default AddUser
