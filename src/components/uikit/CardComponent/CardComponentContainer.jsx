import { CardComponent } from "./CardComponent";
import { Flex } from "@chakra-ui/react";

export function CardComponentContainer() {
  return (
    <Flex gap={4} sm={{ gap: 8 }}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Flex>
  );
}
