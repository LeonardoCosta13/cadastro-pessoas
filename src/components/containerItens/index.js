import React from "react";
import { Container } from "../../pages/Home/styles";
import { ContainerItens as Container } from "./styles";

function ContainerItens(children, isBlur){

    return < Container isBlur={isBlur}>{children}</Container>

}

export default ContainerItens;