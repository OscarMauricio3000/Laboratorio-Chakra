import React,{useState} from 'react'
import { Box, Badge, Text } from "@chakra-ui/react";
import { Buttons } from './Buttons';


export const Cards = (props) => {
    // const [color, setColor] = React.useState("white");
    // if (props.state === "Approved") {
    //     setColor("green");
    // }
    // else if (props.state === "Pending") {
    //     setColor("yellow");
    // } 
    // else {
    //     setColor("red");
    // }

    return (
        <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        maxW="sm"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        >
            <Box
                p="6"
                ml="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                <Text fontWeight="bold">
                    {props.name}
                    <Badge colorScheme="green">
                        {props.state}
                    </Badge>
                </Text>
            </Box>
            <Text>
                {props.date}
            </Text>
            <Text>
                {props.time}
            </Text>
            <Buttons name="CANCEL" />
        </Box>
    );
}