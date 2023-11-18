import { useRef, useState } from "react";
import AddCategory from "../components/AddCategory";
import GifGrid from "../components/GifGrid";
import { Box, Button, Text, Wrap, WrapItem, useToast } from "@chakra-ui/react";
import { IconTrash, IconTrashFilled } from "@tabler/icons-react";
import "../style/App.css";

const GifExpertApp = () => {
  //recuerda que el estado tiene que ir en minuscula
  const [categorias, setCategorias] = useState([]);
  const [data, setData] = useState(null);
  const toast = useToast();
  const toastIdRef = useRef(null);
  const onAddCategory = (newCategory) => {
    //recuerda que estas agregando un string
    // y por lo tanto si quieres agregar un campo
    // elemento mas al array tienes que crear una constante.
    // const newItem = 'berlith'
    //utilziando un callback con el estado
    // setCategorias(cat => [...categorias, newItem])
    //utilizando directamente el array
    //if (categorias.includes(newCategory)) return;
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
