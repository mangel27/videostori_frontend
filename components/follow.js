import {
  Box,
  Icon,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import { FOLLOW_DATA } from "../constants/layoutConstants"
import NextLink from "next/link"

const FollowUs = () => {
  return (
    <Box
      mx="auto"
      w="100%"
      p="2%"
      textAlign={"center"}
      bg={useColorModeValue("#3D3D3D", "white")}
      color={useColorModeValue("white", "black")}
    >
      <Text fontWeight={400} fontSize={["18px", "24px"]}>
        Connect with us on Social
      </Text>
      <Flex
        mt="2em"
        w={["80%", "50%", "50%", "30%"]}
        mx="auto"
        justifyContent={"space-around"}
      >
        {FOLLOW_DATA &&
          FOLLOW_DATA.map((item, index) => {
            return (
              <Link
                rel="nofollow"
                as={NextLink}
                key={index + "follow"}
                href={item.link}
                target="blank"
              >
                <Icon as={item.icon} w={8} h={8} />
              </Link>
            )
          })}
      </Flex>
    </Box>
  )
}
export default FollowUs
