import { css } from 'styled-components'
import { minQuery, maxQuery } from '../helpers'

export const maxWidthMixin = css`
  > * {
    width: 90vw;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
  }
`

export const paddingLeft = css`
  ${maxQuery('xl')} {
    width: 90vw;
    margin: 0 auto;
  }
  ${minQuery('>xl')} {
    padding-left: clamp(5vw, calc((100vw - 1200px) / 2), 100vw) !important;
  }
`

export const paddingRight = css`
  ${maxQuery('xl')} {
    width: 90vw;
    margin: 0 auto;
  }
  ${minQuery('>xl')} {
    padding-right: clamp(5vw, calc((100vw - 1200px) / 2), 100vw) !important;
  }
`

export const maxWidthPadding = (direction) => css`
  /* ${`padding-${direction}`}: 5vw!important; */
  ${maxQuery('xl')} {
    width: 90vw;
    margin: 0 auto;
  }
  ${minQuery('1300px')} {
    ${`padding-${direction}`}: calc((100vw - 1200px) / 2)!important;
  }
`
