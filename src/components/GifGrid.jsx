import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import {
  Box,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Wrap,
  Button,
} from "@chakra-ui/react";
import { Loading } from "./loading";
import { IconTrashFilled } from "@tabler/icons-react";

const GifGrid = ({ category, handleCategory} ) => {
  const { images, isLoading } = useFetchGifs(category);
  
  // const deleteItemCategory = (id) => {
  //   const delImages = images.filter((del) => del.id != id);
  //   setImages(delImages);
  // };


  return (
    <>
      <Text as={"h1"} color={"white"} fontWeight={"semibold"} fontSize={30}>
        {category}
      </Text>

      <Loading isLoading={isLoading} />
      <Button
        onClick={() => handleCategory(category)}
        pos={"relative"}
        top={"40%"}
        backgroundColor={"gray.600"}
        right={"81rem"}
      >
        <IconTrashFilled w={4} h={4} />
      </Button>
      <Box mb={25}>
      <Wrap spacingY={10} spacingX={30}>
        {images.map((gift) => (
          <Box
            key={gift.id}
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            mx={"auto"}
          >
            <Box
              rounded={"lg"}
              mt={-2}
              pos={"relative"}
              h={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",

                top: 5,
                left: 0,
                backgroundImage: `url()`,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                h={230}
                w={282}
                objectFit={"cover"}
                src={gift.url}
                alt={gift.title}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.700"}
                fontSize={"sm"}
                textTransform={"uppercase"}
                textAlign={"center"}
              >
                {gift.title}
              </Text>
            </Stack>
          </Box>
        ))}
      </Wrap>
      </Box>
    </>
  );
};

export default GifGrid;
