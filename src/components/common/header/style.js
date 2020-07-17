import styled from 'styled-components'

export const HdContainer = styled.div`
    display: block;
    padding: 30px 50px;
    background-color: white;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    position: fixed;
    width: 100%;
    z-index: 9;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
        padding: 20px;
    }
`

export const TText = styled.h1`
    display: block;
    text-align: left;
    font-family: sans-serif;
    font-weight: 800;
    color: silver;
    @media (max-width: ${(props) => props.theme.screen.sm}) {
        ${(props) => props.theme.size.sm[5]}
    }
`
