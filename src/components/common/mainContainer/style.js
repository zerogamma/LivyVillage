import styled from 'styled-components'

export const LayoutContainer = styled.div``
export const MainContent = styled.div`
    position: relative;
    min-height: 100%;
    height: 100%;
    padding-top: 138px;
    display: grid;
    place-items: center;
    grid-template: auto 1fr auto / auto 1fr auto;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
        padding-top: 85px;
    }
`
