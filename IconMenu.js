import { IconButton } from "@chakra-ui/react"
import { IoIosMenu } from "react-icons/io";

export const IconMenu = (props) => {
    return (
        <IconButton
            aling="left"
            variant="outline"
            colorScheme="teal"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<IoIosMenu />}
            onClick={props.onClick}
        />
    );
}