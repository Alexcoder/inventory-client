import{TextField,  } from '@mui/material'


export const SingleMain =({label, onChange,value, name, type, min, max})=>{
    return(
        <div >
           <TextField label={label}
            onChange={onChange}
            value={value} 
            name={name}
            type={type}
            min={min}
            max={max}
            style={{
           }}
            />
      </div>
    )
}

