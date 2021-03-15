import Styled from 'styled-components'
import { rem } from 'polished'
import { minQuery, maxQuery } from '../../helpers'
import scrollBar from '../../base/scrollBar'

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
            ${scrollBar}
            ${maxQuery('lg')} {
                height: 64vh;
            }
            padding: 0px 1.5em;
            padding-top: 0.5em;
            padding-left: 2em;
            overflow-y: auto;
            display: grid;
            align-content: flex-start;
            justify-content: center;
            grid-template-columns: repeat(5, 1fr);
            /* grid-template-columns: calc(50% - 0.5em) calc(50% - 0.5em); */
            /* column-gap: 1.5em; */
             grid-gap: 1.5em;
            /* ${minQuery('sm')} {
            grid-template-columns: repeat(3, 1fr);
           
            }
            ${minQuery('lg')} {
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 0.5em;
            }
            ${minQuery('1883px')} {
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 1em;
            } */
             ${maxQuery('md')} {
                grid-template-columns: repeat(4, 1fr);
                /* background: red; */
            }
            ${maxQuery('sm')} {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        footer {
            box-shadow: 0px 0px 3px #00000029;
            border-radius: 0px 0px 10px 10px;
            height: ${rem('53px')};
        }
    }

`
