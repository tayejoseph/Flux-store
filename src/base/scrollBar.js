import { css } from 'styled-components'
import { minQuery } from '../helpers'

const ScrollBar = css`
  ${minQuery('md')} {
    ::-webkit-scrollbar {
      width: 14px;
      height: 18px;
      background: #f9f6fb;
    }
    ::-webkit-scrollbar-thumb {
      height: 6px;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 7px;
      -webkit-border-radius: 7px;
      background-color: ${(props) => props.theme.primary};
      box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
        inset 1px 1px 0px rgba(0, 0, 0, 0.05);
      -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
        inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
      display: none;
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }
`
export default ScrollBar
