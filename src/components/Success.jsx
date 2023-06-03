import { Fragment } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import Topbar from './Topbar'

const theme = createTheme({
  status: {
    danger: orange[500]
  }
})

const Success = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Topbar heading={'Success'} />
        <Typography
          variant='h4'
          color='inherit'
          component='div'
          style={{
            lineHeight: '3rem',
            marginTop: '2rem',
            marginBottom: '2rem'
          }}
        >
          Thank you for your submission
        </Typography>
        <Typography
          variant='h5'
          color='inherit'
          component='p'
          style={{ lineHeight: '3rem' }}
        >
          You will receive an email with further instructions.
        </Typography>
      </Fragment>
    </ThemeProvider>
  )
}

export default Success
