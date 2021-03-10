import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    height: 100%;
    div.dashboard--header {
        div.wallet--actions__container {
            display: flex;
            justify-content: space-between;
            div.flux--row {
                display: flex;
                button:not(:last-child) {
                    margin-right: 1em;
                }
            }
        }
    }

    div.store--container {
        box-shadow: 0px 0px 2px #00000029;
        border-radius: 10px;
        background: #fff;
        padding-top: 1em;
        div.store--content {
            height: 71.8vh;
            padding: 0px 1em;
            overflow-y: auto;
            display: grid;
            background: pink;
            grid-template-columns: repeat(auto-fill, 250px);
        }
        footer {
            box-shadow: 0px 0px 3px #00000029;
            border-radius: 0px 0px 10px 10px;
            height: ${rem('53px')};
        }
    }

`
