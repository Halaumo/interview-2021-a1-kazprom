import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
`

export const Padding = styled.div`
  padding: 15px;
`

export const RowButtonPadding = styled(Padding)`
  margin: -10px;

  & > button {
    margin: 10px;
  }
`

export const Users = styled.div`

`