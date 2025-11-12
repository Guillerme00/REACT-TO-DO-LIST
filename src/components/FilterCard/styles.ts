import styled from 'styled-components'
import { Props } from './index'

type PropsActive = Omit<Props, 'Conter' | 'text'>

export const Card = styled.div<PropsActive>`
  padding: 8px;
  border: 1px solid ${(props) => (props.Active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.Active ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.Active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.div`
  fort-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
