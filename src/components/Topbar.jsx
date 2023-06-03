import { Fragment } from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

const Topbar = ({ heading }) => {
  return (
    <Fragment>
      <AppBar
        position='static'
        style={{
          textAlign: 'center',
          minHeight: '4rem',
          marginBottom: '1rem'
        }}
      >
        <Typography
          variant='h4'
          color='inherit'
          component='div'
          style={{ lineHeight: '4rem' }}
        >
          {heading}
        </Typography>
      </AppBar>
    </Fragment>
  )
}

export default Topbar
