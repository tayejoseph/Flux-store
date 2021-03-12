import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.aside`
    padding: 1em;
    padding-left: 2em;
    padding-top: 1.5em;
    a {
        text-decoration: none;
        display: flex;
        position: relative;
        &:before {
            content: "";
            display: block;
            width: ${rem('12px')};
            margin-right: 1em;
            height: ${rem('12px')};
            box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
            background: #fff;
            border: 3px solid #fff;
            border-radius: 50%;
        }
        &:not(:last-child) {
            margin-bottom: ${rem('43.5px')};
            &:after {
                content: "";
                display: block;
                position: absolute;
                left: ${rem('7.5px')};
                top: ${rem('20px')};
                height: ${rem('40px')};
                border: 1.5px solid ${({ theme }) => theme.primary};
            }
        }
        &.active {
            span {
                color: ${({ theme }) => theme.primary};
                opacity: 1;
            }
            &:before {
                background: ${({ theme }) => theme.primary};
                border: 3px solid #fff;
            }
        }
    }


`
