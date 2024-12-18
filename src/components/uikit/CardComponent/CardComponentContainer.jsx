import { CardComponent } from "./CardComponent";
import { Flex } from "@chakra-ui/react";

export function CardComponentContainer() {
  return (
    <Flex gap={4} wrap="nowrap" lg={{ gap: 8, flexWrap: "nowrap" }}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Flex>
  );
}
