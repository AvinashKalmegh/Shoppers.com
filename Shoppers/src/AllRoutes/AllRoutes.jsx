import {Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ProductPage from "../Pages/ProductPage";
import PageNotFound from "../Pages/PageNotFound";

const AllRoutes = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/products" element={<ProductPage />}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes;