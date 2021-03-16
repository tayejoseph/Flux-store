import Styled from 'styled-components'
import { rem } from 'polished'
import { maxQuery } from '../../../helpers'
import scrollBar from '../../../base/scrollBar'

export default Styled.div`
   header {       
        min-height: ${rem('118px')};
        box-shadow: 0px 0px 2px #00000029;
        border-radius: 10px;
        padding: 1.2em 2em;
        display: flex;
        background: #fff;
        flex-direction: column;
        justify-content: space-between;
        div.transaction--header__row {
            display: flex;
                align-items: center;
                justify-content: space-between;
                ${maxQuery('md')} {
                    flex-direction: column;
                    align-items: flex-start;
                    h1 {
                        margin: 0.6em 0px;
                        margin-top: 1em;
                    }
                    div {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        div.input--group {
                            width: fit-content;
                        }
                    }
                }
            div {
                display: flex;
                align-items: center;
                button {
                    padding: 0.8em 2em;
                    padding-right: 1em;
                    font-weight: bold;
                }
                hr {
                    height: 2.5em;
                    margin: 0px 1.5em;
                    margin-right: 2em;
                    border: none;
                    border-right: 1.2px solid #E1E1E1;
                }
                input {
                    width: ${rem('232px')};
                    height: ${rem('42px')};
                }
            }
        }
   }

   div.transaction--container {
       margin-top: 1.2em;
        max-width: ${rem('1078px')};
       div.table--container {
           overflow: auto;
            box-shadow: 0px 0px 3px #00000029;
            border-radius: 10px;
            table {
             width:  ${rem('1078px')};
                tbody {
                    height: 70vh;
                    ${scrollBar};
                    ${maxQuery('md')} {
                        height: 58vh;
                    }
                    span[class^="status--container"] {
                        border-radius: 5px;
                        padding: 0.4em 0.5em;
                        font-weight: 100;
                        display: inline-block;
                        width: ${rem('76px')};           
                    }
                }
            }
       }
   }
`
