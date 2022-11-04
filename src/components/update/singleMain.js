import{TextField, Grid, } from '@mui/material'


export const SingleMain =({label, onChange,value, name, type,sx})=>{
    return(
        <Grid item xs={12} sm={4} md={6}>
           <TextField label={label}
            onChange={onChange}
           value={value} 
           name={name}
           type={type}
           sx={{width: {md: "11rem", sm: "13rem", xs: "15rem"}}}/>
      </Grid>
    )
}

