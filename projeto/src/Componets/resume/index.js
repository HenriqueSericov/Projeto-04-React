import React from 'react'
import Resumeitem from '../resumeitem'
import * as C from "./styles"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa"

const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <Resumeitem  title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <Resumeitem  title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <Resumeitem  title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    )
}

export default Resume