/* eslint-disable react-refresh/only-export-components */
import { useContext, memo } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ControlContext } from '@/layouts/CheckoutContent/CheckoutContent'
import './AutocompleteField.scss'

function AutocompleteField({
  name,
  options,
  label,
  placeholder,
  error,
  message,
  propOnChange
}) {
  const { control, register } = useContext(ControlContext)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref } }) => (
        <Autocomplete
          isOptionEqualToValue={(option, value) => option.name === value.name}
          noOptionsText="Not found"
          options={options}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            const resolvedId = newValue.code

            propOnChange?.(resolvedId)
          }}
          selectOnFocus
          renderInput={(params) => (
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
              {...params}
              name={name}
              inputRef={ref}
              variant="outlined"
              label={label}
              placeholder={placeholder}
              color="info"
              {...register(name)}
              error={!!error}
              helperText={message}
            />
          )}
        />
      )}
    />
  )
}

export default memo(AutocompleteField)
