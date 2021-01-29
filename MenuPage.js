import { MdCheckBoxOutlineBlank } from "react-icons/md";
import React,{useDisclosure} from 'react'
import {IconMenu} from './IconMenu'
import {DrawerPage} from './DrawerPage'
import {
  Box,
  Menu,
  MenuButton,
  // MenuList,
  // MenuItem,
} from "@chakra-ui/react"

export const MenuPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      bg="white"
      w="100%"
      p={2}
      color="black"
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Menu  >
        <IconMenu onClick={onOpen}/> 
        <DrawerPage value="left" isOpen={isOpen} onClose={onClose}/>
      </Menu>
    </Box>
  );
}