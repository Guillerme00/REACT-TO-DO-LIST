import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  textarea {
    resize: none;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

export const Options = styled.div`
  margin-bottom: 32px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 12px;
  }
`

export const Option = styled.div`
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
`
