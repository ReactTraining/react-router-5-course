import React from 'react'
import Card from '../../ui/Card'

const Data = ({ match }) => {
  return <Card style={{ height: '20em' }}>Data ({match.params.databaseType})</Card>
}

export default Data
