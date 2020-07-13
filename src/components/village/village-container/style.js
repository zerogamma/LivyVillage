import styled from 'styled-components'

export const ELContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 70px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        margin-left: 0px;
    }
`