import { Box ,Image} from "@chakra-ui/react" ;
import { IoMdPeople } from "react-icons/io";

export const ImagePage = () =>{
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <IoMdPeople size='220px'/>
          </Box>
    );
}