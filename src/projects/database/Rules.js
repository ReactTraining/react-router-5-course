import React from 'react'
import Card from '../../ui/Card'

const Rules = ({ match }) => {
  return <Card style={{ height: '20em' }}>Rules ({match.params.databaseType})</Card>
}

export default Rules
