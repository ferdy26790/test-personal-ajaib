import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { debounce } from 'lodash';

const FilterInput = ({label, handleChange, value, options}) => {
    return <TextField
            select
            id="outlined-search"
            label={label}
            style={{
            width:'180px'
            }}
            value={value}
            onChange={(e) => {
                handleChange(e.target.value)
            }}
            >
                {options.map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
            </TextField>
}

const InputText = ({label, handleChange}) => {
    const debounceHandleChange = React.useCallback(
        debounce(handleChange, 300)
    ,[])
    return <TextField
    id="outlined-search"
    label={label}
    onChange={debounceHandleChange}
  />
}

export default function InputType({type, label, handleChange, value, options}) {
  const INPUT_TYPE_COMPONENTS = {
    select: <FilterInput label={label} handleChange={handleChange} options={options} value={value}/>,
    text: <InputText label={label} handleChange={handleChange} value={value}/>
  }
  return INPUT_TYPE_COMPONENTS[type] || null
}
