import {Routes, Route} from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Navbar } from "../components/Navbar";
import { Register } from "./Register";
import { Product } from "./Product";
import { SingleProduct } from "./SingleProduct";

export function MainRoutes(){


    return <Routes>

        <Route path="/" element={ <><Navbar /> <Home /></> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/product" element={ <> <Navbar /> <Product /> </> } />
        <Route path="/product/single-product" element={ <SingleProduct /> }  />

    </Routes>
}