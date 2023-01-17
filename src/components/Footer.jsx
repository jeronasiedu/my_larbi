import {
  Box,
  Container,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { BsWhatsapp } from "react-icons/bs"
const Footer = () => {
  return (
    <Box
      bg="brand.50"
      _dark={{
        bg: "blackAlpha.100",
      }}
      mt={10}
    >
      <Container maxW="7xl" py={14}>
        <Stack
          w="full"
          justifyContent="space-between"
          direction={["column", "column", "row"]}
          spacing={6}
        >
          <HStack spacing={8}>
            {Array(4)
              .fill()
              .map((_, i) => (
                <IconButton key={i} icon={<BsWhatsapp />} isRound />
              ))}
          </HStack>
          <Text fontSize="md">
            Copyright {new Date().getFullYear()} Lawyer Larbi. All rights
            reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
