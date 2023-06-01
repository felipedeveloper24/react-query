import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../pages";


const RouterPrincipal = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPrincipal;