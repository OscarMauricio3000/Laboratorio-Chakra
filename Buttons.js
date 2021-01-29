import { Stack,Button, ButtonGroup } from "@chakra-ui/react"

export const Buttons = (props) => {
    return (
        <Stack spacing={4} align="center">
            <Button colorScheme="gray" ize="lg" onClick={props.onClick}>
                {props.name}
            </Button>
        </Stack>
    );
}