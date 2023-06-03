import { useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState('')
  const [city, setCity] = useState('')
  const [bio, setBio] = useState('')

  // Proceed to the next step
  const nextStep = () => {
    setStep(prev => prev + 1)
  }

  // Go back to prev step
  const prevStep = () => {
    setStep(prev => prev - 1)
  }

  const userDetailsProps = {
    step,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    nextStep,
    prevStep
  }

  const personalDetailsProps = {
    step,
    occupation,
    setOccupation,
    city,
    setCity,
    bio,
    setBio,
    nextStep,
    prevStep
  }

  const confirmProps = {
    step,
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio,
    nextStep,
    prevStep
  }

  switch (step) {
    case 1:
      return <FormUserDetails {...userDetailsProps} />
    case 2:
      return <FormPersonalDetails {...personalDetailsProps} />
    case 3:
      return <Confirm {...confirmProps} />
    case 4:
      return <Success setStep={setStep} />
    default:
      return <FormUserDetails {...userDetailsProps} />
  }
}

export default UserForm
