import { useEffect, useState, useContext, useCallback } from 'react'
import AutocompleteField from '../AutocompleteField/AutocompleteField'
import {
  getDistrict,
  getProvince,
  getWards
} from '../../apiServices/getAddressServices'
import { ControlContext } from '@/layouts/CheckoutContent/CheckoutContent'
import { Box, Grid, Typography } from '@mui/material'
import TextFieldInput from '../TextFieldInput/TextFieldInput'

function FormShippingAddress() {
  const [conscious, setConscious] = useState([])
  const {
    setValue,
    isErrorConscious,
    messageConscious,
    isErrorDistrict,
    messageDistrict,
    isErrorWards,
    messageWards,
    isErrorAddress,
    messageAddress
  } = useContext(ControlContext)

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getProvince()

        setConscious(res)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    fetchApi()
  }, [])

  const [district, setDistrict] = useState([])

  const handleConsciousChange = useCallback(async (id) => {
    setValue('district', '')
    setValue('wards', '')
    try {
      const res = await getDistrict(id)

      setDistrict(res.districts)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [wards, setWards] = useState([])

  const handleDistrictChange = useCallback(async (id) => {
    setValue('wards', '')
    try {
      const res = await getWards(id)

      setWards(res.wards)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        Shipping Address
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={4} mb={2}>
          <AutocompleteField
            name={'province'}
            options={conscious ?? []}
            label={'Province/City'}
            placeholder={'Select Province/City'}
            error={isErrorConscious}
            message={messageConscious}
            propOnChange={handleConsciousChange}
          />
        </Grid>
        <Grid item xs={4} mb={2}>
          <AutocompleteField
            name={'district'}
            options={district ?? []}
            label={'District'}
            placeholder={'Select District'}
            error={isErrorDistrict}
            message={messageDistrict}
            propOnChange={handleDistrictChange}
          />
        </Grid>
        <Grid item xs={4} mb={2}>
          <AutocompleteField
            name={'wards'}
            options={wards ?? []}
            label={'Wards'}
            placeholder={'Select Wards'}
            error={isErrorWards}
            message={messageWards}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <TextFieldInput
            name={'address'}
            label={'Specific Address'}
            placeholder={'Enter Specific Address'}
            fullWidth={true}
            color={'info'}
            type={'text'}
            variant={'outlined'}
            error={isErrorAddress}
            helperText={messageAddress}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormShippingAddress
