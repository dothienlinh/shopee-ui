import { useContext, useState } from 'react'
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'
import TextFieldInput from '../TextFieldInput'
import { ControlContext } from '@/layouts/CheckoutContent'

function FormPaymentMethods() {
  const [isCard, setIsCard] = useState(false)

  const { errors } = useContext(ControlContext)

  return (
    <Box
      sx={{
        borderRadius: '2.5rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow:
          'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          paddingBottom: '1.6rem',
          marginBottom: '1.6rem',
          borderBottom: '0.1rem solid black'
        }}
      >
        Payment Methods
      </Typography>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{
          '& .MuiFormControlLabel-label': {
            fontSize: '1.6rem'
          },
          marginBottom: '2rem'
        }}
      >
        <FormControlLabel
          value="Cash On Delivery"
          control={
            <Radio
              checked={!isCard}
              onChange={(e) => {
                if (e.target.checked) {
                  setIsCard(false)
                }
              }}
            />
          }
          label="Cash On Delivery"
        />
        <FormControlLabel
          value="Credit or Debit"
          control={
            <Radio
              onChange={(e) => {
                if (e.target.checked) {
                  setIsCard(true)
                }
              }}
            />
          }
          label="Credit or Debit"
        />
      </RadioGroup>

      {isCard && (
        <>
          <Grid container>
            <Grid item xs={12} mb={2}>
              <TextFieldInput
                name={'cardholderName'}
                fullWidth={true}
                color={'info'}
                label={'Cardholder Name'}
                placeholder={'Enter Cardholder Name'}
                error={!!errors?.cardholderName && isCard}
                helperText={isCard ? errors.cardholderName?.message : null}
              />
            </Grid>

            <Grid item xs={12} mb={2}>
              <TextFieldInput
                name={'cardNumber'}
                fullWidth={true}
                color={'info'}
                label={'Card Number'}
                placeholder={'Enter Card Number'}
                error={!!errors?.cardNumber && isCard}
                helperText={isCard ? errors.cardNumber?.message : null}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextFieldInput
                name={'EXPDate'}
                fullWidth={true}
                color={'info'}
                label={'EXP Date'}
                placeholder={'Enter EXP Date'}
                error={!!errors?.EXPDate && isCard}
                helperText={isCard ? errors.EXPDate?.message : null}
              />
            </Grid>
            <Grid item xs={4}>
              <TextFieldInput
                name={'CVC'}
                fullWidth={true}
                color={'info'}
                label={'Card CVC'}
                placeholder={'Enter CVC'}
                error={!!errors?.CVC && isCard}
                helperText={isCard ? errors.CVC?.message : null}
              />
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </>
      )}
    </Box>
  )
}

export default FormPaymentMethods
