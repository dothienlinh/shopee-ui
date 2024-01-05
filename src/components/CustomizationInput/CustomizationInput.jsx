import TextField from '@mui/material/TextField'

function CustomizationInput({
  type,
  label,
  placeholder,
  fullWidth,
  size,
  className
}) {
  return (
    <TextField
      className={className}
      type={type}
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      size={size}
      sx={{
        '& .MuiOutlinedInput-input': {
          fontSize: '1.4rem'
        },
        '& .MuiInputLabel-formControl': {
          lineHeight: '1.9em',
          fontSize: '1.4rem'
        },
        '& label.Mui-focused': {
          color: '#A0AAB4'
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2'
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7'
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
            borderWidth: '0.1rem'
          }
        },
        '& .MuiOutlinedInput-notchedOutline': {
          '& legend': {
            fontSize: '1rem'
          }
        },
        '& .MuiInputBase-input': {
          padding: '1.2rem 1.4rem'
        }
      }}
    />
  )
}

export default CustomizationInput
