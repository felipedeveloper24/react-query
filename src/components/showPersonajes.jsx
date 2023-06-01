import { Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";



const ShowPersonajes = ()=>{

    const {data,status} = useQuery("personajes",async()=>{
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        if(response.status == 200){
            console.log(response.data.results);
            return response.data.results;
        }
    })

    if(status == "loading"){
        return (
            <Typography>Cargando datos ....</Typography>
        )
    }
    if(status == "success"){
        return (
           <ul>
                {
                    data.map((personaje,idx)=>{
                        return (
                            <li key={idx}>{personaje.name}</li>
                        )
                    })
                }
           </ul>
        )
    }


}

export default ShowPersonajes;
