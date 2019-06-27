import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../ui/Card'

const Users = ({ match }) => {
  return (
    <Card style={{ height: '20em' }}>
      <Link to={`${match.url}/add-user`} className="button">
        Add User
      </Link>
    </Card>
  )
}

export default Users
