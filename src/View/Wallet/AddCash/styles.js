import Styled from 'styled-components'
import { rem } from 'polished'
import { maxQuery } from '../../../helpers'

export default Styled.div`
div.modal--backDrop {
    background-color: #fff;
    div.modal--container {
        width: ${rem('450px')};
             ${maxQuery('sm')} {
        width: ${rem('400px')};
                }
    }
}
div.addCash--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 2.5em;
    div.accNo--container {
        border: 1px solid ${({ theme }) => theme.primary};
        border-radius: 4px;
        width: 100%;
        height: ${rem('180px')};
        text-align: center;
        padding: 1em 2em;
        margin: 1.5em 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div.bankInfo {
            h4 {
                font-weight: 400;
                &:first-child {
                    margin-bottom: 1em;
                }
            }
        }
        h2.instruction {
            font-size: 0.9rem;
            color: #222222;
            opacity: 0.5;
            font-weight: 300;
        }
    }

    footer {
        width: 100%;
        margin-bottom: 1.5em;
    }
}
`
