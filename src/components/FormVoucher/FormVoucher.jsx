import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AutocompleteField from '../AutocompleteField/AutocompleteField'

function FormVoucher() {
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
        Voucher
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <AutocompleteField
            name={'voucher'}
            label={'Voucher'}
            placeholder={'Select Voucher'}
            options={[]}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormVoucher
