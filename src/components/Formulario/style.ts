import styled from "styled-components";

export const ContainerInputMultiline = styled.div`
    background: #202024;
    padding: 10px;
    *{  
        ::-webkit-scrollbar{
            width:5px;
            height:5px;
            border-radius: 5px;
        }
        ::-webkit-scrollbar-track{
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb{
            background-color: #AAAAAA;
            border-radius: 5px;
        }
    }
`