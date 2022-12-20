import { useEffect, useState } from "react";
import axios from "axios"
import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import Sidebar from "../Components/SideBar";


const ProductPage = ()=>{
 const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://shoppers-in.onrender.com/dresses")
        .then((res)=>{
            setData(res.data)
            // console.log(res.data)
        })
        .catch((err)=> console.log(err))
    },[])
    console.log(data)

    return (
        <div style={{marginTop:"130px"}}>
           <Flex>
            <Sidebar/>
           <Container maxW={"7xl"}>
            <SimpleGrid  columns={{base:1,sm:1,md:4}} spacing={4}>
              {data?.length>0 && data.map((ele)=>{
                return (
                    <ProductCard key={ele.id}
                    category={ele.category}
                    title={ele.title}
                    id={ele.id}
                    description={ele.description}
                    price={ele.price}
                    image={ele.image}
                    />

                )
              })}
            </SimpleGrid>
            </Container>
           </Flex>
           
           
        </div>
    )
}

export default ProductPage;