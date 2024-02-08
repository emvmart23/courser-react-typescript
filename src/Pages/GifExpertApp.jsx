import { useRef, useState } from "react";
import AddCategory from "../components/AddCategory";
import GifGrid from "../components/GifGrid";
import { Box, Button, Text, Wrap, WrapItem, useToast } from "@chakra-ui/react";
import { IconTrash, IconTrashFilled } from "@tabler/icons-react";
import "../style/App.css";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([]);
  const [data, setData] = useState(null);
  const toast = useToast();
  const toastIdRef = useRef(null);
  const onAddCategory = (newCategory) => {
    setCategorias([newCategory, ...categorias]);
  };

  const close = () => {
    toastIdRef.current = toast({
      description: "eliminated category",
      duration: 2000,
      icon: <IconTrash w={5} h={5} />,
    });
  };

  const handlerdeleteAllCategory = () => {
    setCategorias([]);
    close();
  };

  const handleCategory = (category) => {
    const onlyOneCategory = categorias.filter((list) => list !== category);
    setCategorias(onlyOneCategory);
  };

  let activo = true;
  const mensaje = ( !activo ) ? 'Activo' : 'Inactivo'


  const getAsync = async () => {
    const getData = await fetch('https://dsaasdads')
    const data = getData.json()
    console.log(data)
    const { url } =  data.images.orginal;

    const imag = document.createElement('img');
    imag.src = url
    document.body.append( imag )

  }

  return (
    <Box h={"100vh"} mb={"40px"}>
      <Text as={"h1"}>GifExpertApp</Text>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} top={10} />
      <Button
        onClick={handlerdeleteAllCategory}
        pos={"relative"}
        left={"89%"}
        bottom={9}
      >
        <IconTrashFilled w={10} h={10} />
      </Button>
      <Wrap maxW={"80rem"} spacingY={30} align={"center"} mx={"auto"}>
        {categorias.map((category) => (
          <GifGrid
            key={category}
            category={category}
            handleCategory={handleCategory}
          />
        ))}
      </Wrap>
    </Box>
  );
};

export default GifExpertApp;
