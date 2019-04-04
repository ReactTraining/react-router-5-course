import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Panel = ({ children, useMaxWidth, className }) => (
  <div className={classnames('panel', className, { 'max-width': useMaxWidth })}>
    <div className="spacing">{children}</div>
  </div>
)

Panel.defaultProps = {
  useMaxWidth: true,
}

Panel.propTypes = {
  useMaxWidth: PropTypes.bool,
}

export default Panel
