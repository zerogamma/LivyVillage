import styled from 'styled-components'

export const LayoutContainer = styled.div`
    position: relative;
    height: fit-content;
    background-image: linear-gradient( #ecedef 0%, #f9f9f9 51%, #FFFFFF 75%);
`
export const MainContent = styled.div`
    position: relative;
    min-height: 100%;
    height: 100%;
    padding-top: 138px;
    display: grid;
    place-items: center;
    grid-template: auto 1fr auto / auto 1fr auto;
`
