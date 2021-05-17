import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { Checkbox } from '@material-ui/core'

interface props {
  checked: boolean
  name: string
  checkboxHandler: MouseEventHandler<HTMLButtonElement>
}

const User = styled.div`
  display: flex;
`

const Name = styled.p`
  font-size: 16px;
  padding-top: 9px;
  padding-bottom: 9px;
`

const UserComponent: FC<props> = ({ checked, name, checkboxHandler }) => {
  return (
    <>
      <User>
        <Checkbox checked={checked} onClick={checkboxHandler} />
        <Name>{name}</Name>
      </User>
    </>
  )
}

export default UserComponent
