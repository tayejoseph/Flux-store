import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.aside`
    padding-top: 1em;
    width: 100%;
    nav { 
        overflow: hidden;
        button {
            margin-left: 1em;
            letter-spacing: 0px;
            color: #222222;
            opacity: 0.7;
            padding: 0px;
            padding: 1em 0px;
            text-align: left;
            padding-left: 1.5em;
            border-radius: 3px 0px 0px 3px;
            font-size: ${rem('14px')};
            line-height: ${rem('20px')};
            &.active {
                background: #F9F6FB;
                border-radius: 3px 0px 0px 3px;
                color: ${({ theme }) => theme.primary};
            }
        }
        hr {
            margin-bottom: 0.6em;
        }
        button.btn--logout {
            color: #FF5E5E;
        }
    }
`
