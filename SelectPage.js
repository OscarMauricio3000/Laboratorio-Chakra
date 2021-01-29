import React from 'react'
import { Select } from "@chakra-ui/react"

export const SelectPage = () => {
    return (
        <React.Fragment>
            <Select placeholder="Select option">
            <option value="Gabriel Bernal">Gabriel Bernal</option> 
            <option value="Henry Black">Henry Black</option> 
            <option value="Santiago Carrillo">Santiago Carrillo</option>
            <option value="Gustavo Carrillo">Gustavo Carrillo</option> 
            <option value="Sergio Martinez">Sergio Martinez</option> 
            <option value="Camila Krioka">Camila Krioka</option>
            <option value="Maria Botero">Maria Botero</option>
            </Select>
        </React.Fragment>
    );
}