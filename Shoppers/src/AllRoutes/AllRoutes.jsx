import {Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import ProductPage from "../Pages/ProductPage";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup";
import ProductDetail from "../Components/ProductDetail";
import Cart from "../Components/Cart"

const AllRoutes = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/products" element={<ProductPage />}></Route>
                <Route path="/products/:id" element={<ProductDetail/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes;