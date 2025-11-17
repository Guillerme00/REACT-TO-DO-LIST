import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Circle = styled(Link)`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;

  &:hover {
    background-color: #278319ff;
  }
`
