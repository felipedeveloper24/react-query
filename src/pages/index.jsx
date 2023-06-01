import { Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import ShowPersonajes from "../components/showPersonajes";


const Home = ()=>{
    return (
        <Grid sx={{
            width:"100%",
            height:"100vh",
            display:"flex",
            flexDirection:"column",
            transition:"all 550ms"
        }}>
            <Header/>
            <ShowPersonajes/>
        </Grid>
    )
}

export default Home;