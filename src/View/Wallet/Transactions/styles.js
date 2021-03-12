import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
   header {       
        height: ${rem('118px')};
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
            div {
                display: flex;
                align-items: center;
                /* background: red; */
                button {
                    padding: 0.8em 2em;
                    padding-right: 1em;
                    font-weight: bold;
                }
                /* hr {
                    width: 70px;
                    transform: rotate(90deg);
                } */
                input {
                    width: ${rem('232px')};
                    height: ${rem('42px')};
                }
            }
        }
   }

   div.transaction--container {
       margin-top: 1.2em;
       div.table--container {
           max-width: ${rem('1078px')};
           tbody {
                height: 70vh;
            }
       }

   }
`
