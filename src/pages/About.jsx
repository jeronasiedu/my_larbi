import {
  Box,
  chakra,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import cert1 from "../assets/gallery-cert-1.jpeg"
import cert2 from "../assets/gallery-cert-2.jpeg"
import cert3 from "../assets/gallery-cert-3.jpeg"
import cert4 from "../assets/gallery-cert-4.jpeg"
import cert5 from "../assets/gallery-cert-5.jpeg"
import cert6 from "../assets/gallery-cert-6.jpeg"
import cert7 from "../assets/gallery-cert-7.jpeg"
import cert8 from "../assets/gallery-cert-8.jpeg"

const About = () => {
  const certificates = [
    {
      title: "Academic Certificate",
      text: "Issued by PEARSON PEACEKEEPING CENTER for the completion of MYTHS AND REALITY",
      image: cert1,
    },
    {
      title: "Academic Certificate",
      text: "Issued by SHERWIN WILLIAMS UNIVERSITY for the completion of STORE MANAGEMENT IT PROGRAM",
      image: cert2,
    },
    {
      title: "Academic Certificate",
      text: "Issued by SPECIAL COURT OF SIERRA LEONE for the completion of research in LEGAL RESEARCH & WRITING",
      image: cert3,
    },
    {
      title: "Certificate",
      text: "Issued by INTERNATIONAL LAW INSTITUTE for the completion of the FOUNDATION TO LEGAL ENGLISH SEMINAR",
      image: cert4,
    },
    {
      title: "Certificate of Honor",
      text: "Issued by GHANA SCHOOL OF LAW for playing the role of an OPENING COMMITTEE CHAIRMAN",
      image: cert5,
    },
    {
      title: "Academic Certificate",
      text: "Issued by PEARSON PEACEKEEPING TRAINING CENTER for the completion of COMPANY OF CODE CHEER",
      image: cert6,
    },
    {
      title: "Academic Certificate",
      text: "Issued by AMERICAN UNIVERSITY WASHINGTON COLLEGE for His DEDICATION TOWARDS LAW",
      image: cert7,
    },
    {
      title: "Certificate",
      text: "Issued by PEARSON PEACEKEEPING CENTER for the completion of MYTHS AND REALITY",
      image: cert8,
    },
  ]

  return (
    <Container maxW="7xl">
      <Heading textAlign="center" textTransform="uppercase" spacing={5} mb={5}>
        About Mr. Isaac Minta Larbi
      </Heading>
      <VStack mb={5}>
        <Heading alignSelf="flex-start">Life & Education</Heading>
        <Text>
          Isaac Minta Larbi is a lawyer with 20 years of experience at the Ghana
          Bar. He attended primary school at Good News International School and
          obtained his "O" and "A" Level Certificates from Koforidua Secondary
          Technical School and Ghana Secondary School in 1995. He holds an LL.B.
          from the Faculty of Law at the University of Ghana and an LL.M. from
          the American University Washington College of Law. He has previously
          worked at the Center for International Policy and War Crimes Research
          Office in Washington D.C., and currently runs his own law firm,{" "}
          <chakra.span color="brand.500" fontWeight="bold">
            The Law Office of Isaac M.
          </chakra.span>{" "}
          Larbi. He has also served as an International Judge in the Phillip C.
          Jessup International Law Moot Court Competition, and has been
          recognized with awards such as the "Academic Consortium Certificate of
          Excellence" and the 2002 Dean Grossman Scholarship in International
          Law. He has participated in international training programs and has
          several publications and landmark cases to his credit.
        </Text>
      </VStack>
      <Heading alignSelf="flex-start" mb={5}>
        Awards & Certificates
      </Heading>
      <SimpleGrid
        w="full"
        columns={[1, 2, 3]}
        spacing={6}
        spacingY={14}
        mb={10}
      >
        {certificates.map((cert, index) => (
          <VStack key={index} alignItems="flex-start" w="full" h="md">
            <Box
              alignSelf="center"
              w="xs"
              h="xs"
              rounded="full"
              overflow="hidden"
            >
              <Image w="full" h="full" objectFit="cover" src={cert.image} />
            </Box>
            <Heading size="lg" color="brand.500">
              {cert.title}
            </Heading>
            <Text>
              Issued by PEARSON PEACEKEEPING CENTER for the completion of MYTHS
              AND REALITY
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default About
