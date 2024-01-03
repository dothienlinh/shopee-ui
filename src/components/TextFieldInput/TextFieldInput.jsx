import { useContext } from 'react'
import { TextField } from '@mui/material'
import { ControlContext } from '@/layouts/CheckoutContent'

function TextFieldInput({
  name,
  label,
  placeholder,
  type,
  variant,
  fullWidth,
  color,
  error,
  helperText
}) {
  const { register } = useContext(ControlContext)
  return (
    <>
      <TextField
        sx={{
          fontSize: '1.6rem',
          '& .MuiInputBase-input': {
            fontSize: '1.4rem'
          },
          '& .MuiInputLabel-sizeMedium': {
            fontSize: '1.4rem'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            '& legend': {
              fontSize: '1rem'
            }
          },
          '& .MuiFormHelperText-contained': {
            fontSize: '1.4rem'
          }
        }}
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        variant={variant}
        fullWidth={fullWidth}
        color={color}
        {...register(name)}
        error={error}
        helperText={helperText}
      />
    </>
  )
}

export default TextFieldInput
