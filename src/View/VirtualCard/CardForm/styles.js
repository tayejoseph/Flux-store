import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
  div.modal--container {
        width: ${rem('375px')};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        padding-top: 0px;
    }

    section {
        background: #FFFFFF;
        border: 1px solid #22222233;
        border-radius: 5px;
        &:first-of-type {
            padding: 1em;
            margin-top: 1em;
        }
        &:not(:last-child) {
            margin-bottom: 1em;
        }
        &:last-of-type {
            padding: 1em;
        }
        /* padding: 1em; */
        div.section--item {
            display: flex;
            padding: 0.5em 1em;
            justify-content: space-between;
        }
        hr {
            margin: 0px;
            border-bottom: 1px solid #22222233;

        }
    }
`
