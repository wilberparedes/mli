import styled from 'styled-components'

import { colors } from '../../../../styles/colors'
import { Flex1 } from '../../../../styles/global-styles.component'

export const Form = styled.form`
  display: flex;
  flex: 1;
`

export const Container = styled(Flex1)`
  border-radius: 5px;
  margin-left: 20px;
  overflow: hidden;
`

export const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  border: none;
  display: flex;
  flex: 1;
  font-size: 18;
  height: 34px;
  padding: 0px 0px 0px 10px;
  color: ${colors.black};
  outline: none;
  border: 0px;
  ::placeholder {
    color: ${colors.gray};
  }
`

export const ButtonIcon = styled.button`
  background-color: ${colors.grayLight};
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`

export const Icon = styled.img``
