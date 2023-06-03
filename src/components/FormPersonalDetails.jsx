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

const FormPersonalDetails = ({
  step,
  occupation,
  setOccupation,
  city,
  setCity,
  bio,
  setBio,
  nextStep,
  prevStep
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Topbar heading={'Enter personal details'} />
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='standard'
              label='Occupation'
              placeholder='Enter your occupation'
              value={occupation}
              onChange={e => setOccupation(e.target.value)}
              sx={{
                width: { sm: 300, md: 400, lg: 500 }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='standard'
              label='City'
              placeholder='Enter your city'
              value={city}
              onChange={e => setCity(e.target.value)}
              sx={{
                width: { sm: 300, md: 400, lg: 500 }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='standard'
              label='Bio'
              placeholder='Enter your bio'
              value={bio}
              onChange={e => setBio(e.target.value)}
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

export default FormPersonalDetails
