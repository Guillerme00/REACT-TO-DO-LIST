import styled from 'styled-components'
import Var from '../../Styles/Var'

type TagProps = {
  Priority?: string
  Status?: string
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Tittle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 16px;
`

export const Tag = styled.span<{ $Priority?: string; $Status?: string }>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  background-color: ${(props) =>
    props.$Status === 'Pending'
      ? Var.Yellow
      : props.$Status === 'In Progress'
      ? Var.Blue
      : props.$Status === 'Completed'
      ? Var.Green
      : props.$Priority === 'Urgent'
      ? Var.Red
      : props.$Priority === 'Importante'
      ? Var.Yellow2
      : props.$Priority === 'Normal'
      ? Var.Yellow
      : '#ccc'};
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Buttons = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const SaveButton = styled(Buttons)`
  background-color: ${Var.Green};
`
export const CancelButton = styled(Buttons)`
  background-color: ${Var.Red};
`
