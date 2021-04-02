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
            margin-top: 2.8em;
            padding-top: 1.8em;
            position: relative;
            div.top--section {
                position: absolute;
                display: flex;
                background: #fff;
                align-items: center;
                top: -1.7em;
                left: 50%;
                transform: translateX(-50%);
                width: ${rem('315px')};
                box-shadow: 0px 3px 20px #00000029;
                border: 1px solid #22222233;
                border-radius: 10px;
                p {
                    flex: 1;
                    text-align: center;
                    &:last-of-type {
                        font-weight: medium;
                    }
                }
                hr {
                    height: 2em;
                    width: 0em;
                    border: 0.5px solid #22222233;

                }
                
            }
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
