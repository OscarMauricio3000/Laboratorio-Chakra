import React, { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoIosMedical } from "react-icons/io";
// import {IconPage }from './IconPage';
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react"

export const Inputs = (props) => { 
    const icon =props.name==="User"? <IoMdPerson />:<IoIosMedical/>;
    return (
        // <Input placeholder={valor} />
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                     children={icon}
                />
                <Input
                    placeholder={props.name}
                    pr="4.5rem"
                    type={props.type}
                />
            </InputGroup>
        </Stack>
    );
}
