import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import NextImage from "../components/image"
import { fetchAPI } from "../lib/api"
import { MdPhoneEnabled } from "react-icons/md"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"
import { useEffect, useState } from "react"
import FollowUs from "./follow"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

const footerIcons = [
  {
    item: FaFacebookF,
  },
  {
    item: FaTwitter,
  },
  {
    item: FaInstagram,
  },
  {
    item: FaWhatsapp,
  },
]

export default function Footer({ logo }) {
  const [sectionData, setSectionData] = useState([])
  const [linkData, setLinkData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    setLoading(false)

    const { data } = await fetchAPI("/footers", {
      sort: "priority:ASC",
      populate: {
        categories: {
          populate: "*",
        },
      },
    })

    if (data && data.length > 0) {
      const [sectionData, linkData] = data.reduce(
        (acc, item) => {
          if (item.attributes.type === "section") {
            acc[0].push(item)
          } else if (item.attributes.type === "links") {
            acc[1].push(item)
          }
          return acc
        },
        [[], []]
      )
      setSectionData(sectionData)
      setLinkData(linkData)
      setLoading(false)
    }
  }
  // eslint-disable-next-line react/display-name
  const Section = React.memo(({ section }) => (
    <Stack align={"flex-start"} spacing={[5, 8]}>
      <Text fontSize={"xl"} color="white" fontWeight="bold">
        {section.attributes.sectionName}
      </Text>
      {section.attributes.categories?.data?.map((category) => (
        <Text
          as={Link}
          fontSize={"sm"}
          fontWeight={400}
          key={`${category.id}-${category.attributes.name}`}
          href={
            section.attributes.refUrl
              ? section.attributes.refUrl + category.attributes.slug
              : category.attributes.slug
          }
        >
          {category.attributes.name}
        </Text>
      ))}
    </Stack>
  ))

  return (
    !loading && (
      <Box
        bg={"gray.900"}
        w="100%"
        color={"gray.200"}
        mt={"3em"}
        pos="relative"
      >
        <FollowUs />
        <Container
          as={Stack}
          mx="0px!important"
          maxW="100%"
          px="3em"
          py={"5em"}
        >
          <SimpleGrid w="100%" columns={[1, 5]} spacing={8}>
            <Box
              height="65px"
              mx={["auto", "0px"]}
              bg="white"
              w="150px"
              as={Link}
              href="/"
              overflow={"hidden"}
            >
              <NextImage image={logo} />
            </Box>
            {sectionData?.map((section) => (
              <Section
                key={`${section.id}-${section.attributes.sectionName}`}
                section={section}
              />
            ))}

            {/* {sectionData &&
              sectionData.length > 0 &&
              sectionData.map((section, index) => {
                return (
                  <Stack
                    key={index + section.id}
                    align={"flex-start"}
                    spacing={[5, 8]}
                  >
                    <Text fontSize={"xl"} color="white" fontWeight="bold">
                      {section.attributes.sectionName}
                    </Text>
                    {section.attributes.categories?.data &&
                      section.attributes.categories.data.length > 0 &&
                      section.attributes.categories.data.map(
                        (category, index) => {
                          return (
                            <Text
                              as={Link}
                              fontSize={"sm"}
                              fontWeight={400}
                              key={index + category.attributes.name}
                              href={
                                section.attributes.refUrl
                                  ? section.attributes.refUrl +
                                    category.attributes.slug
                                  : category.attributes.slug
                              }
                            >
                              {category.attributes.name}
                            </Text>
                          )
                        }
                      )}
                  </Stack>
                )
              })} */}
          </SimpleGrid>
        </Container>
        <Flex bg="#0f1425" justifyContent={["center", "flex-end"]}>
          <Flex
            justifyContent={["flex-start", "space-around"]}
            flexWrap={"wrap"}
            p={5}
            // h="10vh"
          >
            {linkData &&
              linkData.length > 0 &&
              linkData.map((link, index) => {
                return (
                  <Text
                    key={index + link.attributes.sectionName}
                    mx="2em"
                    my="0.5em"
                    as={Link}
                    fontSize={"sm"}
                    fontWeight={400}
                    href={link.attributes.slug}
                  >
                    {link.attributes.sectionName}
                  </Text>
                )
              })}
          </Flex>
        </Flex>
      </Box>
    )
  )
}
