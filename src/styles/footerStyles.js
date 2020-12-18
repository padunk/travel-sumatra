import styled, { css } from 'styled-components'
import { COLORS } from '../constants/constants'

export const FooterNav = styled.div`
  height: 15rem;
  margin-top: 29.6rem;
`

export const FooterContent = styled.div`
  color: ${COLORS.red};
  font-size: 2rem;
  font-weight: 500;
  line-height: 8px;
  flex: 1;

  ${props => props.wider && css`
    flex: 2;
  `}
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;

  a {
    position: relative;
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    padding: 8px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`
