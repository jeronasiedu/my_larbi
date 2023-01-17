import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import React from "react"
const Contact = () => {
  return (
    <Container maxW="7xl">
      <VStack>
        <Heading mb={5}>Let's get in touch</Heading>
        <VStack as="form" maxW="md" w="full">
          <FormControl w="full">
            <FormLabel>Full name</FormLabel>
            <Input w="full" type="text" isRequired />
            <FormHelperText>We'll never share your name</FormHelperText>
          </FormControl>
          <FormControl w="full">
            <FormLabel>Email address</FormLabel>
            <Input w="full" type="email" isRequired />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl w="full" pb={10}>
            <FormLabel>Message</FormLabel>
            <Textarea resize="none" w="full" type="text" isRequired />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <Button w="full">Send Message</Button>
        </VStack>
      </VStack>
    </Container>
  )
}

export default Contact
