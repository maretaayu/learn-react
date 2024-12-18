import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

function CardComponent() {
  return (
    <Box p={4} bgColor="blue.600" color="white" borderRadius="2xs">
      <Image
        src="https://www.mareta.space/images/PortoUIUX.svg"
        w="full"
        height="180px"
        borderRadius="lg"
      />
      <Box gap={4} display="grid" mt={4} lg={{ mt: 8 }}>
        <Heading
          as="h3"
          fontSize="20px"
          lg={{ fontSize: "24px" }}
          color="black"
        >
          Frontend
        </Heading>
        <Text color="black">
          Crafting smooth, responsive web experiences and adherence to best
          practices for search visibility
        </Text>
        <Button bgColor="#374060" color="white">
          Click here
        </Button>
      </Box>
    </Box>
  );
}

export { CardComponent };
