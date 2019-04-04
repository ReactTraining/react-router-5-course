import React from 'react'

const Tiles = ({ children, ...rest }) => {
  // The reason for wrapping in an arbitrary div is for one, we need to ensure
  // the first child of grid is under our control without affecting the children
  // passed in, but also grid items will grow vertically to the height of their
  // row siblings, we might not want that for the children passed in, but we can
  // do that to our arbitrary div
  return (
    <div {...rest} className="tiles">
      {React.Children.map(children, child => (
        <div>{child}</div>
      ))}
    </div>
  )
}

export default Tiles
