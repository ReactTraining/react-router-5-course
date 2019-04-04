import React from 'react'
import classnames from 'classnames'

const Card = ({ children, className, ...rest }) => (
  <div className={classnames('card', className)} {...rest}>
    {children}
  </div>
)

export default Card
