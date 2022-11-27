import{TextField, Grid, } from '@mui/material'


export const SingleMain =({label, onChange,value, name, type,})=>{
    return(
        <Grid item xs={12} sm={12} md={12}>
           <TextField label={label}
            onChange={onChange}
           value={value} 
           name={name}
           type={type}
           sx={{
            width: {md: "13rem", sm: "19rem", xs: "15rem"},
            marginLeft: {md:"-4rem", sm: "3rem", },
           }}
            />
      </Grid>
    )
}

