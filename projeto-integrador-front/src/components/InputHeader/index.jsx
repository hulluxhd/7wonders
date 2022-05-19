import { Input, Image, Box } from "@chakra-ui/react"

function InputHeader(props) {

  const { image, placeholder, postop } = props

  return (

    <Box {...props} position="relative">
      <Input
        background="#FFF"
        placeholder={placeholder}
        borderRadius="0.25rem"
        paddingLeft="43px"
        _placeholder={{
          fontSize: '0.8rem',
        }}
      />
      <Image
        src={image}
        width="15px"
        position="absolute"
        border-style="none"
        left="16px"
        top={postop || "13px"}
        zIndex={1}
      />
    </Box>
  );
}

export default InputHeader;