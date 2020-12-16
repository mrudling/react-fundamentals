// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const marginTop = 20
const styles = {
  smallBox: {
    marginTop,
    backgroundColor: 'lightBlue',
  },
  mediumBox: {
    marginTop,
    backgroundColor: 'pink',
  },
  largeBox: {
    marginTop,
    backgroundColor: 'orange',
  },
}

function Box(props) {
  return (
    <div
      {...{
        ...props,
        className: `box box--${props.size}`,
        style: {
          ...props.style,
          ...{fontStyle: 'italic'},
        },
      }}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={styles.smallBox}>
        small lightblue box
      </Box>
      <Box size="medium" style={styles.mediumBox}>
        medium pink box
      </Box>
      <Box size="large" style={styles.largeBox}>
        large orange box
      </Box>
    </div>
  )
}

export default App
