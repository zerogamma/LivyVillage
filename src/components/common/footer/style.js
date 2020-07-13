import styled from 'styled-components'

export const FTInfo = styled.div`
    padding-top: 30px;
    color: white;

    @media (max-width: ${props => props.theme.screen.sm}) {
        font-size: 12px;    
    }
`
export const FTContainer = styled.div`
    text-align: right;
    padding-right: 50px;
    bottom: 0;
    width: 100%;
    height: 80px;
    position: relative;
    background-image: linear-gradient( #5182a9 0% , #3268a7 51%,  #10427b 75%);
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

    @media (max-width: ${props => props.theme.screen.sm}) {
        text-align: center;
        padding-right: 0px;  
    }
`