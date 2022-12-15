import React from 'react'
import { Container, Box, SimpleGrid, Divider } from '@chakra-ui/react'

const Container6 = () => {
  return (
    <div>
         
      <Container mt={10} maxW={"8xl"}>
        <SimpleGrid columns={{base: 1, sm: 2, md:3}} spacing={5}>
            <Box cursor={'pointer'}>
                <img src="https://images.ctfassets.net/5de70he6op10/3nbfFkkusdFDrzp6kA4OIl/8ea10bc434ae2397c6543085c9d3d01d/111422_HPG_RR_Furniture.jpg?w=856&q=80&fm=webp" alt="" />
            </Box>
            <Box cursor={'pointer'}>
                <img src="https://images.ctfassets.net/5de70he6op10/CShsGv8tmOEkdHcEZKrZn/4496b2a68f8b9d4b5efee0ed2fb17690/RR_BeddingPillowsThrows.jpg?w=856&q=80&fm=webp" alt="" />
            </Box>
            <Box cursor={'pointer'}>
                <img src="https://images.ctfassets.net/5de70he6op10/5wTKXC5wjHWgVTJDtirqZG/09b9d97dbe5f7e80923d24f7221e35e2/RR_Candles_Default.jpg?w=856&q=80&fm=webp" alt="" />
            </Box>
        </SimpleGrid>
      </Container>
      
    </div>
  )
}

export default Container6