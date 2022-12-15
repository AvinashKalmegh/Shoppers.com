import React from 'react'
import { Container, Box, SimpleGrid } from '@chakra-ui/react'

const Container2 = () => {
  return (
    <div>
        <Container mt={10} maxW={"8xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={7}>
          <Box  cursor={"pointer"}>
            <img
              src="https://images.ctfassets.net/5de70he6op10/1UtgIRn3AHo7yfB3CsbYdw/ced16c178459bc64efcf64a82422808b/LL_M1a.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </Box>
          <Box  cursor={"pointer"}>
            <img
              src="https://images.ctfassets.net/5de70he6op10/3RVZ7uybOuPPShdGFMqT8v/b5959346a8523c91664dd622f29f0b42/LL_M1b.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </Box>
          <Box  cursor={"pointer"}>
            <img
              src="https://images.ctfassets.net/5de70he6op10/29ixjcb2lf5i9QNbF0PWJq/6548be3127a3a13e7b4f13e6f029d059/LL_M1c.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </Box>
          <Box  cursor={"pointer"}>
            <img
              src="https://images.ctfassets.net/5de70he6op10/575n66TNKySGUMZHoEPyk1/a8c0be74eb5f6fb558385a19b5cfc120/LL_M1d.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </Box>
          <Box  cursor={"pointer"}>
            <img
              src="https://images.ctfassets.net/5de70he6op10/2FN1eYunGjb7iEefWXUqzL/9ebe26aa22ab3e675b1f27195af512f6/LL_M1e.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </Box>
          <Box  cursor={"pointer"}>
            <img
              src="https://images.ctfassets.net/5de70he6op10/4zCA1PXpVLBKmHSl7Od02R/1b5efdb8c8bb14c2edfa17d49818a4b5/LL_M1f.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  )
}

export default Container2