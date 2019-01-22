import React from 'react';
import injectSheet from 'react-jss'
import Elk from './Elk'

const App = ({ classes }) => {
    return (
      <div className={classes.wrapper}>
        <Elk />
      </div>
    )
}

const styles = {
  wrapper: {
    backgroundColor: '#212121',
  }
}

export default injectSheet(styles)(App)
