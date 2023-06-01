import { Grid ,Typography} from "@mui/material";


const Header = ()=>{
    return(
        <Grid sx={{
            width:"100%",
            height:"50px",
            backgroundColor:"#0f172a",
            color:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"30px"
        }}>
             <Typography variant="h5"  >Estamos en el componente de pagina Home</Typography>
        </Grid>
    )
}

export default Header;