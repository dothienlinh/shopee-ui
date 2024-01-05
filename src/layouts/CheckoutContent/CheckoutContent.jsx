import classNames from 'classnames/bind'
import styles from './CheckoutContent.module.scss'
import { Container } from 'react-bootstrap'
import { Box, Button, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormPersonalInfo from '@/components/FormPersonalInfo'
import FormShippingAddress from '@/components/FormShippingAddress'
import { createContext } from 'react'
import FormVoucher from '@/components/FormVoucher'
import FormPaymentMethods from '@/components/FormPaymentMethods'

const cx = classNames.bind(styles)

export const ControlContext = createContext()

function CheckoutContent() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required('Name is required')
      .max(50, 'Name must not exceed 30 characters'),
    email: yup
      .string()
      .trim()
      .required('Email is required')
      .email('Email invalidate'),
    phoneNumber: yup
      .string()
      .trim()
      .required('Phone number is required')
      .matches(
        /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/,
        'Email invalidate'
      ),
    province: yup.string().trim().required('Province/City is required'),
    district: yup.string().trim().required('District is required'),
    wards: yup.string().trim().required('Ward is required'),
    address: yup.string().trim().required('Address is required'),
    cardholderName: yup.string().required('Cardholder name is required'),
    cardNumber: yup.string().required('Card number is required'),
    EXPDate: yup.string().required('EXP Date is required'),
    CVC: yup.string().required('Card CVC is required')
  })

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      province: '',
      district: '',
      wards: '',
      address: ''
    }
  })

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    alert(JSON.stringify(data))
  }

  const value = {
    control,
    register,
    setValue,
    errors,
    isErrorConscious: !!errors.province,
    messageConscious: errors?.province?.message,
    isErrorDistrict: !!errors.district,
    messageDistrict: errors?.district?.message,
    isErrorWards: !!errors.wards,
    messageWards: errors?.wards?.message,
    isErrorAddress: !!errors.address,
    messageAddress: errors?.address?.message
  }

  return (
    <ControlContext.Provider value={value}>
      <Container className="mt-4">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid
            container
            spacing={2}
            sx={{ minHeight: '100rem', backgroundColor: 'white' }}
            className={cx('checkout_content')}
          >
            <Grid item xs={8}>
              <FormPersonalInfo errors={errors} />

              <FormShippingAddress />

              <FormVoucher />

              <FormPaymentMethods />
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ backgroundColor: 'var(--nc-white)' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: 'palette.primary.main',
                    height: '4rem',
                    width: '21rem',
                    fontSize: '1.6rem'
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </ControlContext.Provider>
  )
}

export default CheckoutContent
