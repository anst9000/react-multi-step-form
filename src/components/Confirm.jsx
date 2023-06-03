import { Fragment } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Topbar from './Topbar'

const theme = createTheme({
  status: {
    danger: orange[500]
  }
})

const Confirm = ({
  step,
  firstName,
  lastName,
  email,
  occupation,
  city,
  bio,
  nextStep,
  prevStep
}) => {
  const handleFormSubmit = () => {
    // PROCESS FORM AND SEND

    nextStep()
  }
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Topbar heading={'Confirm user data'} />
        <Grid container rowSpacing={2}>
          <Grid item xs={6}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Typography
                variant='h5'
                color='inherit'
                component='h5'
                style={{ lineHeight: '3rem' }}
                sx={{ textDecoration: 'underline' }}
              >
                User details
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary='First name' secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Last name' secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Email' secondary={email} />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Typography
                variant='h5'
                color='inherit'
                component='h5'
                style={{ lineHeight: '3rem' }}
                sx={{ textDecoration: 'underline' }}
              >
                Personal details
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary='Occupation' secondary={occupation} />
                </ListItem>
                <ListItem>
                  <ListItemText primary='City' secondary={city} />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Bio' secondary={bio} />
                </ListItem>
              </List>
            </Box>
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
              onClick={() => handleFormSubmit()}
            >
              Submit <ChevronRightIcon />
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    </ThemeProvider>
  )
}

export default Confirm
