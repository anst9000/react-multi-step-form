import { Fragment } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Topbar from './Topbar'

const theme = createTheme({
  status: {
    danger: orange[500]
  }
})

const FormUserDetails = ({
  step,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  nextStep,
  prevStep
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Topbar heading={'Enter user details'} />
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='standard'
              label='First name'
              placeholder='Enter your first name'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              sx={{
                width: { sm: 300, md: 400, lg: 500 }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='standard'
              label='Last name'
              placeholder='Enter your last name'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              sx={{
                width: { sm: 300, md: 400, lg: 500 }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='standard'
              label='Email'
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{
                width: { sm: 300, md: 400, lg: 500 }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              style={{ margin: '15px' }}
              onClick={prevStep}
              disabled={step < 2}
            >
              <ChevronLeftIcon /> Go Back
            </Button>
            <Button
              variant='contained'
              style={{ margin: '15px' }}
              onClick={nextStep}
            >
              Continue <ChevronRightIcon />
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    </ThemeProvider>
  )
}

export default FormUserDetails
