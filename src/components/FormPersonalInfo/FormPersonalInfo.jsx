import { Box, Grid, Typography } from '@mui/material'
import TextFieldInput from '../TextFieldInput'

function FormPersonalInfo({ errors }) {
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
        Personal Information
      </Typography>

      <Grid container>
        <Grid item xs={12} mb={2}>
          <TextFieldInput
            name={'name'}
            variant={'outlined'}
            type={'text'}
            label={'Your Name'}
            placeholder={'Enter Your Name'}
            fullWidth={true}
            color={'info'}
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextFieldInput
            name={'email'}
            variant={'outlined'}
            type={'text'}
            label={'Your Email'}
            placeholder={'Enter Your Email'}
            fullWidth={true}
            color={'info'}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        </Grid>

        <Grid item xs={6}>
          <TextFieldInput
            name={'phoneNumber'}
            variant={'outlined'}
            type={'text'}
            label={'Your Phone Number'}
            placeholder={'Enter Your Phone Number'}
            fullWidth={true}
            color={'info'}
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormPersonalInfo
