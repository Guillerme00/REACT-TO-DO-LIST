import styled, { createGlobalStyle } from 'styled-components'

const GlobalReset = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export default GlobalReset
