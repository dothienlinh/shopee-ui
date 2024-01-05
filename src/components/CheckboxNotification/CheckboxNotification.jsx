import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

function CheckboxNotification({
  value,
  onChange,
  label = 'Kích hoạt',
  labelPlacement = 'end'
}) {
  return (
    <FormControlLabel
      sx={{
        '& .MuiFormControlLabel-label': {
          fontSize: '1.6rem',
          color: 'rgba(0, 0, 0, 0.8)'
        }
      }}
      value={value}
      control={
        <Checkbox
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          sx={{
            color: 'palette.primary.main',
            '&.Mui-checked': {
              color: 'palette.primary.main'
            }
          }}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  )
}

export default CheckboxNotification
