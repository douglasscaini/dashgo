import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Douglas Scaini</Text>
        <Text color="gray.300" fontSize="small">
          douglas.scaini@unoesc.edu.br
        </Text>
      </Box>

      <Avatar size="md" name="Douglas Scaini" src="https://github.com/douglasscaini.png" />
    </Flex>
  );
}
