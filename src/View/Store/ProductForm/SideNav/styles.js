import Styled from 'styled-components'
import { rem } from 'polished'
import { maxQuery, minQuery } from '../../../../helpers'

export default Styled.aside`
    padding: 1em;
    padding-left: 2em;
    padding-top: 1.5em;
    width: 100%;
   
    nav { 
        ${maxQuery('md')} {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        a {
            text-decoration: none;
            display: flex;
            position: relative;
            ${maxQuery('md')} {
                align-items: center;
                width: 50%;
                flex-direction: column;
            }
            &:before {
                content: "";
                display: block;
                width: ${rem('12px')};
                margin-right: 1em;
                height: ${rem('12px')};
                box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
                background: #fff;
                z-index: 1;
                border: 3px solid #fff;
                border-radius: 50%;
                ${maxQuery('md')} {
                    margin-bottom: 1em;
                }
            }
            &:not(:last-child) {
                ${minQuery('>md')} {
                margin-bottom: ${rem('43.5px')};
                }
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    left: ${rem('7.5px')};
                    top: ${rem('20px')};
                    height: ${rem('40px')};
                    border: 1.5px solid ${({ theme }) => theme.primary};
                    ${maxQuery('md')} {
                        height: 2.5px;
                        background: ${({ theme }) => theme.primary};
                        top: 5px;
                        width: 100%;
                        left: 50%;
                    }
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
    }
`
