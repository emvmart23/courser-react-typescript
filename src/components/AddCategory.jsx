import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IconPointerSearch } from "@tabler/icons-react";
import  { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories([...inputValue, inputValue])
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <InputGroup
        onSubmit={onSubmit}
        as={"form"}
        borderRadius={5}
        size={"lg"}
        pos={"relative"}
        w={"24%"}
        left={10}
        maxW={"320"}
      >
        <InputLeftElement
          pointerEvents={"none"}
          children={<IconPointerSearch w={10} h={10} color="white" />}
        />
        <Input
          type="text"
          placeholder={"insert category"}
          border={"1px solid #949494"}
          onChange={onInputChange}
          value={inputValue}
          color={"white"}
          fontWeight={"semibold"}
        />
      </InputGroup>
    </>
  );
};

export default AddCategory;
